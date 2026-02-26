"use client";

import { usePathname } from "next/navigation";
import { Burger, Container, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRef, useEffect, useState } from "react";
import classes from "./header.module.css";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import Link from "next/link";
import { navData78, navData910, type NavItem, renderNavItem } from "./Sideview";

export function HeaderSimple() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [expandedClass, setExpandedClass] = useState<"78" | "910" | null>(
        null,
    );
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
                close();
            }
        };

        if (opened) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [opened, close]);

    return (
        <header className={classes.header} ref={headerRef}>
            <Container size="md" className={classes.inner}>
                <Link href="/ueber" className={classes.mainlink}>
                    <Group>
                        <Image
                            component={NextImage}
                            src="/Logo.svg"
                            alt=""
                            width={526}
                            height={223}
                            fill={false}
                            h={40}
                            w={"auto"}
                        />
                    </Group>
                </Link>

                <Group gap={5} visibleFrom="md">
                    <Link
                        href="/klasse78"
                        className={classes.link}
                        data-active={
                            pathname.startsWith("/klasse78") || undefined
                        }
                    >
                        Klassen 7+8
                    </Link>
                    <Link
                        href="/klasse910"
                        className={classes.link}
                        data-active={
                            pathname.startsWith("/klasse910") || undefined
                        }
                    >
                        Klassen 9+10
                    </Link>
                    <Link href="/ueber" className={classes.link}>
                        Über das Projekt
                    </Link>
                </Group>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="md"
                    size="sm"
                />
            </Container>

            {opened && (
                <Container size="lg" className={classes.dropdown}>
                    <Stack gap={5}>
                        <Link
                            href="/klasse78"
                            className={classes.link}
                            onClick={(e) => {
                                if (expandedClass === "78") {
                                    close();
                                } else {
                                    e.preventDefault();
                                    setExpandedClass("78");
                                }
                            }}
                        >
                            Klassen 7+8
                        </Link>
                        {expandedClass === "78" && (
                            <div style={{ paddingLeft: "16px" }}>
                                {navData78.map((item) =>
                                    renderNavItem(item, 0, pathname),
                                )}
                            </div>
                        )}

                        <Link
                            href="/klasse910"
                            className={classes.link}
                            onClick={(e) => {
                                if (expandedClass === "910") {
                                    close();
                                } else {
                                    e.preventDefault();
                                    setExpandedClass("910");
                                }
                            }}
                        >
                            Klassen 9+10
                        </Link>
                        {expandedClass === "910" && (
                            <div style={{ paddingLeft: "16px" }}>
                                {navData910.map((item) =>
                                    renderNavItem(item, 0, pathname),
                                )}
                            </div>
                        )}

                        <Link
                            href="/ueber"
                            className={classes.link}
                            onClick={close}
                        >
                            Über das Projekt
                        </Link>
                    </Stack>
                </Container>
            )}
        </header>
    );
}
