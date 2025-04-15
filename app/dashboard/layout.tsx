"use client";

import { Sidebar } from "../components/sidebar";
import styles from "./layout.module.css";
import Session from "supertokens-auth-react/recipe/session";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [userRole, setUserRole] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUserRole() {
            try {
                const response = await fetch('/api/user/roles');
                if (!response.ok) {
                    throw new Error('Failed to fetch user roles');
                }
                const data = await response.json();
                // Take the first role if there are multiple
                setUserRole(data.roles[0] || "User");
            } catch (err) {
                console.error("Error fetching user role:", err);
                setUserRole("User"); // Default fallback
            } finally {
                setIsLoading(false);
            }
        }

        getUserRole();
    }, []);

    const handleSignOut = async () => {
        try {
            await Session.signOut();
            router.push("/");
        } catch (err) {
            console.error("Sign out error:", err);
        }
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <Sidebar />
            </aside>
            <main className={styles.mainContent}>
                <div className={styles.topBar}>
                    <div className={styles.topBarLeft}>
                        <h1 className={styles.pageTitle}>Dashboard</h1>
                    </div>
                    <div className={styles.topBarRight}>
                        <div className={styles.roleBadge}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{isLoading ? "Loading..." : userRole}</span>
                        </div>
                        <button className={styles.logoutButton} onClick={handleSignOut}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}