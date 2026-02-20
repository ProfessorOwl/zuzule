"use client";

import { usePathname } from "next/navigation";
import classes from "./sideview.module.css";
import { navData78, renderNavItem } from "./Sideview";

const data = navData78;

export function Sideview78() {
    const pathname = usePathname();

    const links = data.map((item) => renderNavItem(item, 0, pathname));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>{links}</div>
        </nav>
    );
}
