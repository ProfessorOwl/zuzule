"use client";

import { usePathname } from "next/navigation";
import {
  IconArrowUpRightCircle,
  IconCircle,
  IconCircleSquare,
  IconCylinder,
  IconDiabolo,
  IconInfoCircle,
  IconPrism,
  IconRectangle,
  IconSquareRoundedPercentage,
  IconTrendingUp,
  IconTriangle,
} from "@tabler/icons-react";
import classes from "./sideview.module.css";
import Link from "next/link";
import Proportional from "../../public/Proportional.svg";
import Linear from "../../public/Linear.svg";

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
        link: "/klasse78/koerper/einfuehrung",
        label: "Einführung",
        icon: IconInfoCircle,
      },
      { link: "/klasse78/koerper/prismen", label: "Prismen", icon: IconPrism },
      {
        link: "/klasse78/koerper/zylinder",
        label: "Zylinder",
        icon: IconCylinder,
      },
      {
        link: "/klasse78/koerper/zusammengesetzte_koerper",
        label: "Zusammengesetzte Körper",
        icon: IconCircleSquare,
      },
    ],
  },
  {
    label: "Ebene Figuren",
    icon: IconCylinder,
    children: [
      {
        link: "/klasse78/ebene_figuren/einfuehrung",
        label: "Einführung",
        icon: IconInfoCircle,
      },
      {
        link: "/klasse78/ebene_figuren/dreiecke",
        label: "Dreiecke",
        icon: IconTriangle,
      },
      {
        link: "/klasse78/ebene_figuren/vierecke",
        label: "Vierecke",
        icon: IconRectangle,
      },
      {
        link: "/klasse78/ebene_figuren/kreise",
        label: "Kreise",
        icon: IconCircle,
      },
    ],
  },
  {
    link: "/klasse78/wachstumsprozesse",
    label: "Wachstumsprozesse",
    icon: IconTrendingUp,
    children: [
      {
        link: "/klasse78/wachstumsprozesse/einfuehrung",
        label: "Einführung",
        icon: IconInfoCircle,
      },
      {
        link: "/klasse78/wachstumsprozesse/anti-proportionale_funktionen",
        label: "(Anti-)Proportionale Funktionen",
        icon: Proportional,
      },
      {
        link: "/klasse78/wachstumsprozesse/lineare_funktionen",
        label: "Lineare Funktionen",
        icon: Linear,
      },
    ],
  },
];

export function Sideview78() {
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
