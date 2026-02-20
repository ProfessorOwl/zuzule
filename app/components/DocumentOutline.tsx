"use client";

import {
    Box,
    Checkbox,
    CheckboxProps,
    Group,
    List,
    Stack,
    Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconDotsDiagonal2 } from "@tabler/icons-react";
export interface HeadingItem {
    id: string;
    text: string;
    level: number;
}

export function DocumentOutline() {
    const router = useRouter();
    const pathname = usePathname();
    const [headings, setHeadings] = useState<HeadingItem[]>([]);
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
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
        // Get all elements with the data-checkable-id attribute
        const checkableElements = document.querySelectorAll(
            "[data-checkable-id]",
        ) as NodeListOf<HTMLElement>;
        const headingItems: HeadingItem[] = [];

        checkableElements.forEach((element) => {
            const id = element.getAttribute("data-checkable-id");
            if (!id) return;

            // Find the Title/heading element inside this container
            const titleElement = element.querySelector(
                "h1, h2, h3, h4, h5, h6",
            );
            if (titleElement) {
                const level = parseInt(titleElement.tagName[1]);
                const text = titleElement.textContent || "";

                if (text.trim()) {
                    headingItems.push({ id, text, level });
                }
            }
        });

        setHeadings(headingItems);
    }, [pathname]);

    // Sync checked state from URL parameters
    useEffect(() => {
        const newCheckedItems = new Set<string>();
        headings.forEach((heading) => {
            if (searchParams.get(heading.id) === "true") {
                newCheckedItems.add(heading.id);
            }
        });
        setCheckedItems(newCheckedItems);
    }, [searchParams, headings]);

    const handleScroll = (id: string) => {
        const element = document.querySelector(`[data-checkable-id="${id}"]`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleCheckboxToggle = (id: string) => {
        const isCurrentlyChecked = checkedItems.has(id);
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

    if (headings.length === 0) {
        return null;
    }

    return (
        <Stack gap="sm" p="md" visibleFrom="md">
            <Text fw={600} size="xs">
                Gliederung
            </Text>
            <List>
                {headings.map((heading) => {
                    const isChecked = checkedItems.has(heading.id);
                    return (
                        <Group
                            key={heading.id}
                            gap={6}
                            wrap="nowrap"
                            style={{
                                cursor: "pointer",
                                paddingLeft: `${(heading.level - 1) * 12}px`,
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
                                {heading.text}
                            </Text>
                        </Group>
                    );
                })}
            </List>
        </Stack>
    );
}
