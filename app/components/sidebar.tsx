"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";

export function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Profile", path: "/dashboard/profile" },
        { name: "Settings", path: "/dashboard/settings" },
        { name: "Analytics", path: "/dashboard/analytics" },
    ];

    return (
        <div className={styles.sidebar}>
            <h2 className={styles.logo}>Dashboard</h2>
            <nav>
                <ul className={styles.navList}>
                    {menuItems.map((item) => (
                        <li
                            key={item.path}
                            className={pathname === item.path ? styles.active : ""}
                        >
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}