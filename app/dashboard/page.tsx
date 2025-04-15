"use client";

import { useEffect, useState } from "react";
import styles from "./layout.module.css";
import Session from "supertokens-auth-react/recipe/session";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    const [userRole, setUserRole] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getUserInfo() {
            try {
                const sessionExists = await Session.doesSessionExist();
                if (!sessionExists) {
                    router.push("/auth");
                    return;
                }

                const response = await fetch('/api/user/roles');
                if (!response.ok) {
                    throw new Error('Failed to fetch user roles');
                }

                const data = await response.json();
                setUserRole(data.roles);
            } catch (err) {
                setError("Failed to load user information");
                console.error("Session error:", err);
            } finally {
                setIsLoading(false);
            }
        }
        getUserInfo();
    }, [router]);

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.welcomeBox}>
                    <h1 className={styles.welcomeTitle}>
                        Welcome to Your Dashboard
                    </h1>
                    <p className={styles.welcomeText}>
                        You are logged in as a <span className={styles.roleHighlight}>{userRole[0]}</span>
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>👥</div>
                        <h3>User Management</h3>
                        <p>Manage user permissions and roles</p>
                        <button className={styles.cardButton}>View Details</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>📊</div>
                        <h3>Analytics</h3>
                        <p>View system analytics and metrics</p>
                        <button className={styles.cardButton}>View Details</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>⚙️</div>
                        <h3>Settings</h3>
                        <p>Configure system preferences</p>
                        <button className={styles.cardButton}>View Details</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>📝</div>
                        <h3>Reports</h3>
                        <p>Generate and view reports</p>
                        <button className={styles.cardButton}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}