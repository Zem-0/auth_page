"use client";

import { useState } from "react";
import styles from "../../page.module.css";

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    
    return (
        <>
            <div className={styles.dashboardHeader}>
                <h1 className={styles.dashboardTitle}>Profile</h1>
            </div>
            
            <div className={styles.dashboardContent}>
                <div className={styles.dashboardCard}>
                    <div className={styles.profileHeader}>
                        <h2>User Profile</h2>
                        <button 
                            className={styles.editButton}
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? "Save" : "Edit"}
                        </button>
                    </div>
                    
                    <div className={styles.profileInfo}>
                        <div className={styles.profileField}>
                            <label>Name</label>
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    className={styles.profileInput}
                                    defaultValue="John Doe"
                                />
                            ) : (
                                <p>John Doe</p>
                            )}
                        </div>
                        
                        <div className={styles.profileField}>
                            <label>Email</label>
                            {isEditing ? (
                                <input 
                                    type="email" 
                                    className={styles.profileInput}
                                    defaultValue="john.doe@example.com"
                                />
                            ) : (
                                <p>john.doe@example.com</p>
                            )}
                        </div>
                        
                        <div className={styles.profileField}>
                            <label>Role</label>
                            <p>User</p>
                        </div>
                        
                        <div className={styles.profileField}>
                            <label>Member Since</label>
                            <p>January 1, 2023</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.dashboardCard}>
                    <h2>Account Security</h2>
                    <div className={styles.securityOptions}>
                        <button className={styles.securityButton}>Change Password</button>
                        <button className={styles.securityButton}>Enable Two-Factor Authentication</button>
                    </div>
                </div>
            </div>
        </>
    );
} 