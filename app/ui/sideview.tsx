"use client";

import { useState } from "react";
import { IconCylinder, IconGraph, IconSphere } from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";
import classes from "./sideview.module.css";
import Link from "next/link";

const data = [
  {
    link: "/themen/oberflaecheninhalte",
    label: "Oberflächeninhalte von Körpern",
    icon: IconSphere,
  },
  {
    link: "/themen/volumina",
    label: "Volumina von Körpern",
    icon: IconCylinder,
  },
  {
    link: "/themen/wachstumsfunktionen",
    label: "Wachstumsfunktionen",
    icon: IconGraph,
  },
];

export function Sideview() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5}/>
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
