"use client";

import { usePathname } from "next/navigation";
import classes from "./sideview.module.css";
import { navData910, renderNavItem } from "./Sideview";

const data = navData910;

export function Sideview910() {
       const pathname = usePathname();

    const links = data.map((item) => renderNavItem(item, 0, pathname));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>{links}</div>
        </nav>
    );
}