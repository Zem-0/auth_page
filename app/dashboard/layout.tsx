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
                setUserRole(data.roles[0] || "User");
            } catch (err) {
                console.error("Error fetching user role:", err);
                setUserRole("User");
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
                        <div className={styles.credits}>
                            <span>My Space</span>
                            <span className={styles.creditAmount}>670.31 credits</span>
                        </div>
                    </div>
                    <div className={styles.topBarRight}>
                        <div className={styles.notificationIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            <div className={styles.notificationDot}></div>
                        </div>
                        <div className={styles.userProfile}>
                            <div className={styles.userInfo}>
                                <span className={styles.userName}>John Doe</span>
                            </div>
                            <div className={styles.userAvatar}>
                                <span>J</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}