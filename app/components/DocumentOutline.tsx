"use client";

import { Checkbox, CheckboxProps, Group, List, ListItem, ScrollAreaAutosize, Stack, Text } from "@mantine/core";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconDotsDiagonal2 } from "@tabler/icons-react";
import { useScrollSpy } from "@mantine/hooks";

interface HeadingItem {
    id: string;
    title: string | null;
    titleOrder: number;
}

function DocumentOutlineInner() {
    const router = useRouter();
    const pathname = usePathname();
    const [headings, setHeadings] = useState<HeadingItem[]>([]);
    const [scrollHost, setScrollHost] = useState<HTMLElement | null>(null);
    const [checkedHeadings, setCheckedHeadings] = useState<Set<string>>(new Set());
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const outlineViewportRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const viewport = document.querySelector(".mantine-ScrollArea-viewport") as HTMLElement | null;
        setScrollHost(viewport);
    }, [pathname]);

    const spy = useScrollSpy({
        selector: "[data-checkable-id] :is(h1, h2, h3, h4, h5, h6)",
        getDepth: (element) => parseInt(element.tagName[1], 10),
        getValue: (element) => element.textContent || "",
        scrollHost: scrollHost ?? undefined,
        offset: 80,
    });
    const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) => (indeterminate ? <IconDotsDiagonal2 {...others} /> : <IconDotsDiagonal2 {...others} />);

    const activeHeadingId = useMemo(() => {
        const activeData = spy.data[spy.active];
        if (!activeData) {
            return null;
        }
        return activeData.getNode().closest("[data-checkable-id]")?.getAttribute("data-checkable-id");
    }, [spy.active, spy.data]);

    useEffect(() => {
        // Alle Elemente sammeln, die den "data-checkable-id"-typen haben
        const checkableElements = document.querySelectorAll("[data-checkable-id]") as NodeListOf<HTMLElement>;
        const headingItems: HeadingItem[] = [];
        // Sammle davon die ids
        checkableElements.forEach((element) => {
            const id = element.getAttribute("data-checkable-id");
            if (!id) return;

            // Irgendwo darin steckt eine Überschrift
            const titleElement = element.querySelector("h1, h2, h3, h4, h5, h6");
            if (titleElement) {
                const titleOrder = parseInt(titleElement.tagName[1]);
                const title = titleElement.textContent || "";

                headingItems.push({
                    id,
                    title,
                    titleOrder,
                });
            }
        });

        setHeadings(headingItems);
    }, [pathname, searchParams]);

    // Wenn sich die searchParams ändern sollen die entsprechenden Headings zur liste gecheckter Headings zugefügt werden
    useEffect(() => {
        const checkedHeading = new Set<string>();
        headings.forEach((heading) => {
            if (searchParams.get(heading.id) == "true") {
                checkedHeading.add(heading.id);
            }
        });
        setCheckedHeadings(checkedHeading);
    }, [searchParams]);

    // Scrollt den Outline-Container, sodass das aktive Element im oberen Drittel bleibt
    useEffect(() => {
        if (!activeHeadingId || !outlineViewportRef.current) return;
        const viewport = outlineViewportRef.current;
        const activeItem = viewport.querySelector(`[data-outline-id="${activeHeadingId}"]`) as HTMLElement | null;
        if (!activeItem) return;

        const viewportHeight = viewport.clientHeight;
        const targetScrollTop = activeItem.offsetTop - viewportHeight / 3;
        viewport.scrollTo({ top: Math.max(0, targetScrollTop), behavior: "smooth" });
    }, [activeHeadingId]);

    // Scrolle zum Objekt mit einer bestimmten ID
    const handleScroll = (id: string) => {
        const element = document.querySelector(`[data-checkable-id="${id}"]`);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    // Wird ausgeführt, wenn eine Checkbox geklickt wird. Ändert die Searchparams zu den momentan geklickten Checkboxen
    const handleCheckboxToggle = (id: string) => {
        const isCurrentlyChecked = checkedHeadings.has(id);
        const newSearchParams = new URLSearchParams(searchParams.toString());

        if (isCurrentlyChecked) {
            newSearchParams.delete(id);
        } else {
            newSearchParams.set(id, "true");
        }

        // Update the URL without causing a page reload
        const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
        router.replace(newUrl, {
            scroll: false,
        });
    };

    const shouldShowHeading = (index: number): boolean => {
        const currentHeading = headings[index];
        let searchLevel = currentHeading.titleOrder;

        // Check all headings before this one to find parent headings
        for (let i = index - 1; i >= 0; i--) {
            const prevHeading = headings[i];

            // If we find a heading with a lower level (parent)
            if (prevHeading.titleOrder < searchLevel) {
                // If this parent is checked, hide the current heading
                if (checkedHeadings.has(prevHeading.id)) {
                    return false;
                }
                // Continue looking for even higher-level parents
                searchLevel = prevHeading.titleOrder;
            }
        }

        return true;
    };

    if (headings.length === 0) {
        return null;
    }

    return (
        <Stack gap="sm" p="xs" mt="xl" visibleFrom="md">
            <Text fw={600} size="xs">
                Gliederung
            </Text>
            <ScrollAreaAutosize mah={"calc(100vh - 145px)"} viewportRef={outlineViewportRef}>
                {headings.map((heading, index) => {
                    // Hide this heading if a parent heading is checked
                    if (!shouldShowHeading(index)) {
                        return null;
                    }

                    const isChecked = checkedHeadings.has(heading.id);
                    const isActive = heading.id === activeHeadingId;
                    const isHovered = hoveredId === heading.id;

                    const bgColor = isChecked ? "transparent" : isActive ? "var(--mantine-primary-color-light)" : isHovered ? "var(--mantine-color-gray-0)" : "transparent";

                    return (
                        <Group
                            data-outline-id={heading.id}
                            bg={bgColor}
                            bdrs={5}
                            mt={heading.titleOrder == 1 ? 1.5 : 0}
                            key={heading.id}
                            gap={6}
                            align="flex-start"
                            wrap="nowrap"
                            pl={5 + (heading.titleOrder - 1) * 16}
                            style={{
                                cursor: "pointer",
                                borderBottom: heading.titleOrder == 1 ? "1px solid var(--mantine-primary-color-light-color)" : "0px solid var(--mantine-primary-color-ligght-color)",
                            }}
                            className="outline-item"
                            onMouseEnter={() => setHoveredId(heading.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => handleScroll(heading.id)}
                        >
                            {!(searchParams.get("students") === "true") && <Checkbox checked={isChecked} onChange={() => handleCheckboxToggle(heading.id)} size="xs" mt={6} color="red" variant="outline" onClick={(e) => e.stopPropagation()} miw={16} icon={CheckboxIcon} />}
                            <Text
                                mt={0}
                                size="xs"
                                miw={0}
                                flex={1}
                                td={isChecked ? "line-through" : "none"}
                                c={isChecked ? "var(--mantine-color-gray-6)" : isActive ? "var(--mantine-color-teal-9)" : "var(--mantine-color-gray-7)"}
                                style={{
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                    transition: "all 0.2s ease",
                                }}
                                className="outline-link"
                            >
                                {heading.title}
                            </Text>
                        </Group>
                    );
                })}
            </ScrollAreaAutosize>
        </Stack>
    );
}

export function DocumentOutline() {
    return (
        <Suspense>
            <DocumentOutlineInner />
        </Suspense>
    );
}
