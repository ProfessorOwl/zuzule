"use client";

import { usePathname } from "next/navigation";
import { Burger, Container, Group, Stack } from "@mantine/core";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
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
    const clickOutside = useClickOutside(() => close());

    return (
        <header className={classes.header} ref={clickOutside}>
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
                            preload={true}
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
                    <Link href="/ueber" className={classes.link} data-active={pathname.startsWith("/ueber") || undefined}>
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
                            <div
                                style={{ paddingLeft: "16px" }}
                                onClick={close}
                            >
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
                            <div
                                style={{ paddingLeft: "16px" }}
                                onClick={close}
                            >
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
