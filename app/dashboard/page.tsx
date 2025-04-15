"use client";

import { useEffect, useState } from "react";
import styles from "../dashboard/layout.module.css";
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
                // Use Session.doesSessionExist() instead of getSession
                const sessionExists = await Session.doesSessionExist();
                if (!sessionExists) {
                    router.push("/auth");
                    return;
                }

                // Fetch roles from our API endpoint
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

    const handleLogout = async () => {
        try {
            await Session.signOut();
            router.push("/");
        } catch (err) {
            setError("Failed to sign out");
            console.error("Logout error:", err);
        }
    };

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div className={styles.userInfo}>
                    {userRole.map((role, index) => (
                        <span key={role} className={styles.userRole}>
                            {role}
                        </span>
                    ))}
                </div>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    Sign Out
                </button>
            </div>
            
            <div className={styles.content}>
                <div className={styles.welcomeBox}>
                    <h1 className={styles.welcomeTitle}>
                        Welcome, <span className={styles.roleHighlight}>{userRole[0]}</span>
                    </h1>
                    <p className={styles.welcomeText}>Here's your dashboard overview</p>
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>👥</div>
                        <h3>User Management</h3>
                        <p>Manage user permissions and roles</p>
                    </div>

                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>📊</div>
                        <h3>Analytics</h3>
                        <p>View system analytics and metrics</p>
                    </div>

                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>⚙️</div>
                        <h3>Settings</h3>
                        <p>Configure system preferences</p>
                    </div>

                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>📝</div>
                        <h3>Reports</h3>
                        <p>Generate and view reports</p>
                    </div>
                </div>
            </div>
        </div>
    );
}