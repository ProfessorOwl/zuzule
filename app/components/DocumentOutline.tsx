"use client";

import { Checkbox, CheckboxProps, Group, List, ListItem, ScrollAreaAutosize, Stack, Text } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconDotsDiagonal2 } from "@tabler/icons-react";
import { useScrollSpy } from "@mantine/hooks";

interface HeadingItem {
    id: string;
    title: string | null;
    titleOrder: number;
}

export function DocumentOutline() {
    const router = useRouter();
    const pathname = usePathname();
    const [headings, setHeadings] = useState<HeadingItem[]>([]);
    const [scrollHost, setScrollHost] = useState<HTMLElement | null>(null);
    const [checkedHeadings, setCheckedHeadings] = useState<Set<string>>(new Set());
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
    }, [pathname]);

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

            <ScrollAreaAutosize mah={"calc(100vh - 145px)"}>
                {headings.map((heading, index) => {
                    // Hide this heading if a parent heading is checked
                    if (!shouldShowHeading(index)) {
                        return null;
                    }

                    const isChecked = checkedHeadings.has(heading.id);
                    return (
                        <Group
                            key={heading.id}
                            gap={6}
                            align="flex-start"
                            wrap="nowrap"
                            pl={(heading.titleOrder - 1) * 12}
                            style={{
                                cursor: "pointer",
                            }}
                            className="outline-item"
                        >
                            <Checkbox checked={isChecked} onChange={() => handleCheckboxToggle(heading.id)} size="xs" mt={11} color="red" variant="outline" onClick={(e) => e.stopPropagation()} miw={16} icon={CheckboxIcon} />
                            <Text
                                size="xs"
                                miw={0}
                                flex={1}
                                td={isChecked ? "line-through" : "none"}
                                bg={heading.id === activeHeadingId ? "var(--mantine-primary-color-light)" : undefined}
                                c={isChecked ? "var(--mantine-color-gray-6)" : heading.id === activeHeadingId ? "var(--mantine-primary-color-7)" : "var(--mantine-primary-color-6)"}
                                style={{
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                    transition: "all 0.2s ease",
                                }}
                                className="outline-link"
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = isChecked ? "var(--mantine-color-gray-7)" : "var(--mantine-primary-color-8)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = isChecked ? "var(--mantine-color-gray-6)" : heading.id === activeHeadingId ? "var(--mantine-primary-color-7)" : "var(--mantine-primary-color-6)";
                                }}
                                onClick={() => handleScroll(heading.id)}
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
