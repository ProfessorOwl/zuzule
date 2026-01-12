"use client";

import { useState } from "react";
import { IconCylinder, IconGraph, IconSphere } from "@tabler/icons-react";
import classes from "./sideview.module.css";
import Link from "next/link";

interface NavItem {
  label: string;
  icon?: React.ComponentType<any>;
  link?: string;
  children?: NavItem[];
}

const data: NavItem[] = [
  {
    label: "Körper",
    icon: IconSphere,
    children: [
      { link: "/klasse7+8/koerper/einfuehrung", label: "Einführung" },
      { link: "/klasse7+8/koerper/wuerfel", label: "Würfel" },
      { link: "/klasse7+8/koerper/quader", label: "Quader" },
      { link: "/klasse7+8/koerper/kugeln", label: "Kugeln" },
      { link: "/klasse7+8/koerper/prismen", label: "Prismen" },
    ],
  },
  {
    link: "/klasse7+8/volumina",
    label: "Volumina von Körpern",
    icon: IconCylinder,
  },
  {
    link: "/klasse7+8/wachstumsfunktionen",
    label: "Wachstumsfunktionen",
    icon: IconGraph,
  },
];

export function Sideview() {
  const [active, setActive] = useState("");

  const renderNavItem = (item: NavItem, level = 0) => {
    if (item.children) {
      return (
        <div key={item.label}>
          <div className={classes.link} style={{ paddingLeft: `${level * 16}px` }}>
            {item.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
            <span>{item.label}</span>
          </div>
          <div>
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        </div>
      );
    } else if (item.link) {
      return (
        <Link
          className={classes.link}
          data-active={item.label === active || undefined}
          href={item.link}
          key={item.label}
          onClick={() => setActive(item.label)}
          style={{ paddingLeft: `${level * 16}px` }}
        >
          {item.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
          <span>{item.label}</span>
        </Link>
      );
    }
    return null;
  };

  const links = data.map((item) => renderNavItem(item));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
