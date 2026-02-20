"use client";

import { usePathname } from "next/navigation";
import { Burger, Container, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRef, useEffect } from "react";
import classes from "./header.module.css";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import Link from "next/link";
import Logo from "../../public/Logo.svg";

const links = [
    { link: "/klasse78", label: "Klassen 7+8" },
    { link: "/klasse910", label: "Klassen 9+10" },
    { link: "/ueber", label: "Über das Projekt" },
];

export function HeaderSimple() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
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

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={pathname.startsWith(link.link) || undefined}
            onClick={toggle}
        >
            {link.label}
        </Link>
    ));

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
                    {items}
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
                        {items}
                    </Stack>
                </Container>
            )}

        </header>
    );
}
