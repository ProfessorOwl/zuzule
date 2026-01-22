"use client";

import { usePathname } from "next/navigation";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname.startsWith(link.link) || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/ueber" className={classes.mainlink}>
          <Group>
            {" "}
            <Image
              component={NextImage}
              src="/logo.svg"
              alt=""
              width={526}
              height={223}
              fill={false}
              h={40}
              w={"auto"}
            />{" "}
          </Group>
        </Link>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
