"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function SettingsPage() {
    const [spaceName, setSpaceName] = useState('My Space');
    const [spaceId] = useState('67e7b881f43bd365f2c2f84c');
    const [credits] = useState('670.31');
    const [fullName, setFullName] = useState('Raviteja Manepalli');
    const [email] = useState('raviteja@insheets.ai');

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>User Profile</h2>
                <p className={styles.sectionDescription}>Your account information</p>
                
                <div className={styles.profileInfo}>
                    <div className={styles.avatar}>
                        <span>R</span>
                    </div>
                    <div className={styles.profileFields}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName" className={styles.label}>Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                readOnly
                                className={`${styles.input} ${styles.readOnly}`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Space Settings</h2>
                <p className={styles.sectionDescription}>Update your space information</p>
                
                <div className={styles.formGroup}>
                    <label htmlFor="spaceName" className={styles.label}>Space name</label>
                    <input
                        type="text"
                        id="spaceName"
                        value={spaceName}
                        onChange={(e) => setSpaceName(e.target.value)}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="spaceId" className={styles.label}>Space ID</label>
                    <input
                        type="text"
                        id="spaceId"
                        value={spaceId}
                        readOnly
                        className={`${styles.input} ${styles.readOnly}`}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="credits" className={styles.label}>Credits</label>
                    <input
                        type="text"
                        id="credits"
                        value={credits}
                        readOnly
                        className={`${styles.input} ${styles.readOnly}`}
                    />
                </div>
            </section>
        </div>
    );
} 