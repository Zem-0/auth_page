"use client";

import { useState } from 'react';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import styles from './page.module.css';

export default function MembersPage() {
    const [emails, setEmails] = useState('');
    const [role, setRole] = useState('Member');
    const session = useSessionContext();

    const handleInvite = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle invite logic here
        console.log('Inviting:', emails, 'with role:', role);
    };

    // Get role from session claims
    const userRole = session.loading 
        ? 'Loading...' 
        : (session.accessTokenPayload?.role || 'Member');

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Team Members</h1>
            
            <section className={styles.inviteSection}>
                <h2>Invite Team Members</h2>
                <form onSubmit={handleInvite} className={styles.inviteForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="emails" className={styles.label}>Email Addresses (comma-separated)</label>
                        <textarea
                            id="emails"
                            value={emails}
                            onChange={(e) => setEmails(e.target.value)}
                            className={styles.textarea}
                            placeholder="email1@example.com, email2@example.com"
                            rows={2}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="role" className={styles.label}>Role</label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className={styles.select}
                        >
                            <option value="Member">Member</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.button}>
                        Send Invites
                    </button>
                </form>
            </section>
            
            <section className={styles.membersSection}>
                <h2>Current Members</h2>
                <div className={styles.membersList}>
                    <div className={styles.memberCard}>
                        <div className={styles.memberInfo}>
                            <span className={styles.role}>
                                Current Role: {userRole}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 