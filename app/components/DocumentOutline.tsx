"use client";

import {
    Checkbox,
    CheckboxProps,
    Group,
    List,
    ListItem,
    Stack,
    Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconDotsDiagonal2 } from "@tabler/icons-react";

interface HeadingItem {
    id: string;
    title: string | null;
    titleOrder: number;
}

export function DocumentOutline() {
    const router = useRouter();
    const pathname = usePathname();
    const [headings, setHeadings] = useState<HeadingItem[]>([]);
    const [checkedHeadings, setCheckedHeadings] = useState<Set<string>>(
        new Set(),
    );
    const searchParams = useSearchParams();
    const CheckboxIcon: CheckboxProps["icon"] = ({
        indeterminate,
        ...others
    }) =>
        indeterminate ? (
            <IconDotsDiagonal2 {...others} />
        ) : (
            <IconDotsDiagonal2 {...others} />
        );

    useEffect(() => {
        // Alle Elemente sammeln, die den "data-checkable-id"-typen haben
        const checkableElements = document.querySelectorAll(
            "[data-checkable-id]",
        ) as NodeListOf<HTMLElement>;
        const headingItems: HeadingItem[] = [];
        // Sammle davon die ids
        checkableElements.forEach((element) => {
            const id = element.getAttribute("data-checkable-id");
            if (!id) return;

            // Irgendwo darin steckt eine Überschrift
            const titleElement = element.querySelector(
                "h1, h2, h3, h4, h5, h6",
            );
            if (titleElement) {
                const titleOrder = parseInt(titleElement.tagName[1]);
                const title = titleElement.textContent || "";

                headingItems.push({ id, title, titleOrder });
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
            element.scrollIntoView({ behavior: "smooth" });
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
        router.replace(newUrl, { scroll: false });
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
            <List withPadding={false}>
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
                            wrap="nowrap"
                            style={{
                                cursor: "pointer",
                                paddingLeft: `${(heading.titleOrder - 1) * 12}px`,
                            }}
                            className="outline-item"
                        >
                            <Checkbox
                                checked={isChecked}
                                onChange={() =>
                                    handleCheckboxToggle(heading.id)
                                }
                                size="xs"
                                color="red"
                                variant="outline"
                                onClick={(e) => e.stopPropagation()}
                                style={{ minWidth: 16, marginTop: 2 }}
                                icon={CheckboxIcon}
                            />
                            <Text
                                size="xs"
                                style={{
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                    color: isChecked
                                        ? "var(--mantine-color-gray-6)"
                                        : "var(--mantine-primary-color-6)",
                                    textDecoration: isChecked
                                        ? "line-through"
                                        : "none",
                                    transition: "all 0.2s ease",
                                    flex: 1,
                                    minWidth: 0,
                                }}
                                className="outline-link"
                                onMouseEnter={(e) => {
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.color = isChecked
                                        ? "var(--mantine-color-gray-7)"
                                        : "var(--mantine-primary-color-8)";
                                }}
                                onMouseLeave={(e) => {
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.color = isChecked
                                        ? "var(--mantine-color-gray-6)"
                                        : "var(--mantine-primary-color-6)";
                                }}
                                onClick={() => handleScroll(heading.id)}
                            >
                                {heading.title}
                            </Text>
                        </Group>
                    );
                })}
            </List>
        </Stack>
    );
}
