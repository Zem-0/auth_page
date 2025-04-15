"use client";

import { useState } from 'react';
import styles from './settings.module.css';

interface NotificationSettings {
    emailNotifications: boolean;
    pushNotifications: boolean;
    marketingEmails: boolean;
}

interface SecuritySettings {
    twoFactorAuth: boolean;
    sessionTimeout: number;
}

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
        emailNotifications: true,
        pushNotifications: true,
        marketingEmails: false,
    });
    const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
        twoFactorAuth: false,
        sessionTimeout: 30,
    });

    const handleNotificationChange = (setting: keyof NotificationSettings) => {
        setNotificationSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleSecurityChange = (setting: keyof SecuritySettings, value: boolean | number) => {
        setSecuritySettings(prev => ({
            ...prev,
            [setting]: value
        }));
    };

    return (
        <div className={styles.settingsContainer}>
            <div className={styles.settingsHeader}>
                <h1>Settings</h1>
                <p>Manage your account settings and preferences</p>
            </div>

            <div className={styles.settingsTabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'profile' ? styles.active : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Profile
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'notifications' ? styles.active : ''}`}
                    onClick={() => setActiveTab('notifications')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    Notifications
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'security' ? styles.active : ''}`}
                    onClick={() => setActiveTab('security')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    Security
                </button>
            </div>

            <div className={styles.settingsContent}>
                {activeTab === 'profile' && (
                    <div className={styles.settingsSection}>
                        <h2>Profile Settings</h2>
                        <div className={styles.formGroup}>
                            <label>Profile Picture</label>
                            <div className={styles.avatarUpload}>
                                <div className={styles.avatar}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <button className={styles.uploadButton}>Upload New Picture</button>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input type="text" defaultValue="John Doe" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email</label>
                            <input type="email" defaultValue="john.doe@example.com" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Bio</label>
                            <textarea className={styles.textarea} defaultValue="Administrator with experience in system management and user support." />
                        </div>
                    </div>
                )}

                {activeTab === 'notifications' && (
                    <div className={styles.settingsSection}>
                        <h2>Notification Preferences</h2>
                        <div className={styles.settingOption}>
                            <div className={styles.settingInfo}>
                                <h3>Email Notifications</h3>
                                <p>Receive notifications via email</p>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={notificationSettings.emailNotifications}
                                    onChange={() => handleNotificationChange('emailNotifications')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div className={styles.settingOption}>
                            <div className={styles.settingInfo}>
                                <h3>Push Notifications</h3>
                                <p>Receive push notifications in browser</p>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={notificationSettings.pushNotifications}
                                    onChange={() => handleNotificationChange('pushNotifications')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div className={styles.settingOption}>
                            <div className={styles.settingInfo}>
                                <h3>Marketing Emails</h3>
                                <p>Receive marketing and promotional emails</p>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={notificationSettings.marketingEmails}
                                    onChange={() => handleNotificationChange('marketingEmails')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                )}

                {activeTab === 'security' && (
                    <div className={styles.settingsSection}>
                        <h2>Security Settings</h2>
                        <div className={styles.settingOption}>
                            <div className={styles.settingInfo}>
                                <h3>Two-Factor Authentication</h3>
                                <p>Add an extra layer of security to your account</p>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={securitySettings.twoFactorAuth}
                                    onChange={() => handleSecurityChange('twoFactorAuth', !securitySettings.twoFactorAuth)}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div className={styles.settingOption}>
                            <div className={styles.settingInfo}>
                                <h3>Session Timeout (minutes)</h3>
                                <p>Automatically log out after inactivity</p>
                            </div>
                            <select
                                className={styles.select}
                                value={securitySettings.sessionTimeout}
                                onChange={(e) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
                            >
                                <option value={15}>15 minutes</option>
                                <option value={30}>30 minutes</option>
                                <option value={60}>1 hour</option>
                                <option value={120}>2 hours</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <button className={styles.changePasswordButton}>
                                Change Password
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.settingsFooter}>
                <button className={styles.saveButton}>Save Changes</button>
                <button className={styles.cancelButton}>Cancel</button>
            </div>
        </div>
    );
} 