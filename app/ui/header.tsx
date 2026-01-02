"use client";

import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import Link from "next/link";

const links = [
  { link: "/themen", label: "Themenübersicht" },
  { link: "/anleitung", label: "Anleitung" },
  { link: "/ueber", label: "Über das Projekt" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          {" "}
          <Image
            component={NextImage}
            src="/logo.jpg"
            alt=""
            width={640}
            height={640}
            fill={false}
            h={50}
            w={"auto"}
          />{" "}
          <h1>Mathema</h1>
        </Group>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
