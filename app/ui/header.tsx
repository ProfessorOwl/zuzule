"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Burger, Button, Container, Group, Stack } from "@mantine/core";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
import { Suspense, useState } from "react";
import classes from "./header.module.css";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import Link from "next/link";
import { navData78, navData910, renderNavItem } from "./Sideview";

function HeaderSimpleInner() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [expandedClass, setExpandedClass] = useState<"78" | "910" | null>(null);
    const pathname = usePathname();
    const isKlasse78 = pathname.startsWith("/klasse78");
    const isKlasse910 = pathname.startsWith("/klasse910");
    const clickOutside = useClickOutside(() => close());
    const searchParams = useSearchParams();

    const isStudent = searchParams.get("students") === "true";

    const studentParams = new URLSearchParams(searchParams.toString());
    studentParams.set("students", "true");
    const studentUrl = `${pathname}?${studentParams.toString()}`;

    return (
        <header className={classes.header} ref={clickOutside}>
            {isStudent ? (
                <div className={classes.innerStudent}>
                    <Image component={NextImage} src="/Logo.svg" alt="Logo" width={526} height={223} fill={false} h={40} w={"auto"} preload={true} />
                </div>
            ) : (
                <Container size={"xl"} maw={"100%"} className={classes.inner}>
                    <Link href="/ueber" className={classes.mainlink}>
                        <Image component={NextImage} src="/Logo.svg" alt="Logo" width={526} height={223} fill={false} h={40} w={"auto"} preload={true} />
                    </Link>

                    <Group gap={5} visibleFrom="md">
                        <Link href="/klasse78/koerper/prismen" className={classes.link} data-active={pathname.startsWith("/klasse78") || undefined}>
                            Klassen 7+8
                        </Link>
                        <Link href="/klasse910/koerper/pyramiden" className={classes.link} data-active={pathname.startsWith("/klasse910") || undefined}>
                            Klassen 9+10
                        </Link>
                        <Link href="/ueber" className={classes.link} data-active={pathname.startsWith("/ueber") || undefined}>
                            Über das Projekt
                        </Link>
                        {isKlasse78 || isKlasse910 ? (
                            <Button color={"desblue"} component="a" href={studentUrl} target="_blank" rel="noopener noreferrer">
                                Inhalt freigeben
                            </Button>
                        ) : (
                            <Container w={192}></Container>
                        )}
                    </Group>

                    <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
                </Container>
            )}

            {opened && (
                <Container size="lg" className={classes.dropdown}>
                    <Stack gap={5}>
                        <Link
                            href="/klasse78/koerper/prismen"
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
                            <div style={{ paddingLeft: "16px" }} onClick={close}>
                                {navData78.map((item) => renderNavItem(item, 0, pathname))}
                            </div>
                        )}

                        <Link
                            href="/klasse910/koerper/pyramiden"
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
                            <div style={{ paddingLeft: "16px" }} onClick={close}>
                                {navData910.map((item) => renderNavItem(item, 0, pathname))}
                            </div>
                        )}

                        <Link href="/ueber" className={classes.link} onClick={close}>
                            Über das Projekt
                        </Link>
                        {isKlasse78 || isKlasse910 ? (
                            <Button color={"desblue"} className={classes.releaseButton} component="a" href={studentUrl} target="_blank" rel="noopener noreferrer">
                                Inhalt freigeben
                            </Button>
                        ) : (
                            <Container w={192}></Container>
                        )}
                    </Stack>
                </Container>
            )}
        </header>
    );
}

export function HeaderSimple() {
    return (
        <Suspense>
            <HeaderSimpleInner />
        </Suspense>
    );
}
