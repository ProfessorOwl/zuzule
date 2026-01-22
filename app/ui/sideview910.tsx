"use client";

import { usePathname } from "next/navigation";
import {
  IconCone,
  IconDiabolo,
  IconInfoCircle,
  IconPyramid,
  IconSphere,
  IconTrendingUp,
} from "@tabler/icons-react";
import classes from "./sideview.module.css";
import Link from "next/link";
import Cubed from "../../public/Cubed.svg";
import Parabola from "../../public/Parabola.svg";
import Exponential from "../../public/Exponential.svg";

interface NavItem {
  label: string;
  icon?: React.ComponentType<any>;
  link?: string;
  children?: NavItem[];
}
const data: NavItem[] = [
  {
    label: "Körper",
    icon: IconDiabolo,
    children: [
      {
        link: "/klasse910/koerper/einfuehrung",
        label: "Einführung",
        icon: IconInfoCircle,
      },
      {
        link: "/klasse910/koerper/pyramiden",
        label: "Pyramiden",
        icon: IconPyramid,
      },
      { link: "/klasse910/koerper/kegel", label: "Kegel", icon: IconCone },
      { link: "/klasse910/koerper/kugeln", label: "Kugeln", icon: IconSphere },
    ],
  },
  {
    label: "Wachstumsprozesse",
    icon: IconTrendingUp,
    children: [
      {
        link: "/klasse910/wachstumsprozesse/einfuehrung",
        label: "Einführung",
        icon: IconInfoCircle,
      },
      {
        link: "/klasse910/wachstumsprozesse/quadratische_funktionen",
        label: "Quadratische Funktionen",
        icon: Parabola,
      },
      {
        link: "/klasse910/wachstumsprozesse/potenzfunktionen",
        label: "Potenzfunktionen",
        icon: Cubed,
      },
      {
        link: "/klasse910/wachstumsprozesse/exponentialfunktionen",
        label: "Exponentialfunktionen",
        icon: Exponential,
      },
    ],
  },
];

export function Sideview910() {
  const pathname = usePathname();

  const renderNavItem = (item: NavItem, level = 0) => {
    if (item.children) {
      return (
        <div key={item.label}>
          <div
            className={classes.link}
            style={{ paddingLeft: `${level * 16}px` }}
          >
            {item.icon && (
              <item.icon
                className={classes.linkIcon}
                style={{ stroke: "currentColor" }}
              />
            )}
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
          data-active={pathname === item.link || undefined}
          href={item.link}
          key={item.label}
          style={{ paddingLeft: `${level * 16}px` }}
        >
          {item.icon && (
            <item.icon
              className={classes.linkIcon}
              style={{ stroke: "currentColor" }}
            />
          )}
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
