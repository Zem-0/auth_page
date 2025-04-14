"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export function Navbar() {
    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>SuperTokens</span>
                </div>
                <div className={styles.navLinks}>
                    <a href="#features" className={styles.navLink}>Features</a>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#docs" className={styles.navLink}>Documentation</a>
                </div>
                <button 
                    className={styles.navSignInButton}
                    onClick={() => router.push("/auth")}
                >
                    Sign In
                </button>
            </div>
        </nav>
    );
} 