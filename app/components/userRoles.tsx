"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

interface UserRolesData {
    userId: string;
    roles: string[];
}

interface ErrorResponse {
    error: string;
    details?: string;
}

export function UserRolesDisplay() {
    const [userData, setUserData] = useState<UserRolesData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUserRoles = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/user/roles");
            
            if (!response.ok) {
                const errorData: ErrorResponse = await response.json();
                throw new Error(errorData.error || "Failed to fetch user roles");
            }
            
            const data: UserRolesData = await response.json();
            setUserData(data);
        } catch (err) {
            console.error("Error fetching user roles:", err);
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserRoles();
    }, []);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loading}>Loading user information...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.error}>
                    <h3>Error Loading User Roles</h3>
                    <p>{error}</p>
                    <button className={styles.retryButton} onClick={fetchUserRoles}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.error}>
                    <h3>No User Data Available</h3>
                    <p>Unable to retrieve user information. Please try again later.</p>
                    <button className={styles.retryButton} onClick={fetchUserRoles}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    const isAdmin = userData.roles.includes("admin");
    const welcomeMessage = isAdmin 
        ? "Welcome, Administrator!" 
        : "Welcome, User!";

    return (
        <div className={styles.userRolesContainer}>
            <h2 className={styles.userRolesTitle}>{welcomeMessage}</h2>
            <div className={styles.userRolesContent}>
                <div className={styles.userRolesSection}>
                    <h3>User ID</h3>
                    <p>{userData.userId}</p>
                </div>
                
                <div className={styles.userRolesSection}>
                    <h3>Your Roles</h3>
                    {userData.roles.length > 0 ? (
                        <ul className={styles.rolesList}>
                            {userData.roles.map((role, index) => (
                                <li key={index} className={styles.roleItem}>
                                    {role}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No roles assigned</p>
                    )}
                </div>
            </div>
        </div>
    );
} 