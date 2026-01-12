"use client";

import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import Link from "next/link";

const links = [
  { link: "/klasse7+8", label: "Klassen 7+8" },
  { link: "/klasse9+10", label: "Klassen 9+10"},
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
        <Link href="/themen" className={classes.mainlink}>
          <Group>
            {" "}
            <Image
              component={NextImage}
              src="/logo.png"
              alt=""
              width={526}
              height={223}
              fill={false}
              h={40}
              w={"auto"}
            />{" "}
            <h1>zuzule</h1>
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
