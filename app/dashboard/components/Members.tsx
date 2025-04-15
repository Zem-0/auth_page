"use client";

import { useState } from 'react';
import styles from './Members.module.css';

interface TeamMember {
    id: string;
    email: string;
    role: string;
    status: string;
    isOwner?: boolean;
}

export default function Members() {
    const [inviteEmails, setInviteEmails] = useState('');
    const [selectedRole, setSelectedRole] = useState('Member');
    const [members] = useState<TeamMember[]>([
        {
            id: '1',
            email: 'raviteja@insheets.ai',
            role: 'OWNER',
            status: 'ACTIVE',
            isOwner: true
        }
    ]);

    const handleInvite = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle invite logic here
        console.log('Inviting:', inviteEmails, 'with role:', selectedRole);
    };

    return (
        <div className={styles.membersContainer}>
            {/* Invite Section */}
            <div className={styles.inviteCard}>
                <h2 className={styles.sectionTitle}>Invite Team Members</h2>
                <form onSubmit={handleInvite}>
                    <div className={styles.formGroup}>
                        <label htmlFor="emails" className={styles.label}>
                            Email Addresses (comma-separated)
                        </label>
                        <input
                            id="emails"
                            type="text"
                            className={styles.input}
                            value={inviteEmails}
                            onChange={(e) => setInviteEmails(e.target.value)}
                            placeholder="email1@example.com, email2@example.com"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="role" className={styles.label}>
                            Role
                        </label>
                        <select
                            id="role"
                            className={styles.select}
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        >
                            <option value="Member">Member</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.inviteButton}>
                        Send Invites
                    </button>
                </form>
            </div>

            {/* Team Members Section */}
            <div className={styles.membersCard}>
                <h2 className={styles.sectionTitle}>Team Members</h2>
                <div className={styles.membersList}>
                    {members.map((member) => (
                        <div key={member.id} className={styles.memberItem}>
                            <div className={styles.memberAvatar}>
                                {member.email[0].toUpperCase()}
                            </div>
                            <div className={styles.memberInfo}>
                                <div className={styles.memberEmail}>{member.email}</div>
                                <div className={styles.memberRole}>{member.role}</div>
                            </div>
                            <div className={styles.memberStatus}>
                                <span className={`${styles.status} ${styles.active}`}>
                                    {member.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 