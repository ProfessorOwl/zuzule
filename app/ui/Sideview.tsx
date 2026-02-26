import {
    IconCircle,
    IconCircleSquare,
    IconCylinder,
    IconDiabolo,
    IconInfoCircle,
    IconPrism,
    IconRectangle,
    IconTriangle,
    IconCone,
    IconPyramid,
    IconSphere,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import classes from "./sideview.module.css";
import Link from "next/link";

export interface NavItem {
    label: string;
    icon?: React.ComponentType<any>;
    link?: string;
    children?: NavItem[];
}

export const navData78: NavItem[] = [
    {
        label: "Körper",
        icon: IconDiabolo,
        children: [
            {
                link: "/klasse78/koerper/prismen",
                label: "Prismen",
                icon: IconPrism,
            },
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
];

export const navData910: NavItem[] = [
    {
        label: "Körper",
        icon: IconDiabolo,
        children: [
            {
                link: "/klasse910/koerper/pyramiden",
                label: "Pyramiden",
                icon: IconPyramid,
            },
            {
                link: "/klasse910/koerper/kegel",
                label: "Kegel",
                icon: IconCone,
            },
            {
                link: "/klasse910/koerper/kugeln",
                label: "Kugeln",
                icon: IconSphere,
            },
        ],
    },
];

export const renderNavItem = (item: NavItem, level = 0, pathname: string ) => {
        if (item.children) {
            return (
                <div key={item.label}>
                    <div
                        className={classes.link}
                        style={{
                            paddingLeft: `${level * 16}px`,
                        }}
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
                        {item.children.map((child) =>
                            renderNavItem(child, level + 1, pathname),
                        )}
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
                    style={{
                        paddingLeft: `${level * 16}px`,
                    }}
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

