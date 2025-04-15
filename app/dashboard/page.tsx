"use client";

import styles from './page.module.css';
import { useEffect, useState } from 'react';

interface Transaction {
    date: string;
    description: string;
    amount: number;
    status: string;
}

// Helper function to format date consistently
const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

export default function DashboardPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            date: formatDate(new Date()),
            description: 'Credits used',
            amount: -0.23,
            status: 'Used'
        },
        {
            date: formatDate(new Date()),
            description: 'Credits used',
            amount: -0.23,
            status: 'Used'
        },
        {
            date: formatDate(new Date()),
            description: 'Credits used',
            amount: -1,
            status: 'Used'
        }
    ]);

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardHeader}>
                <div>
                    <h1 className={styles.title}>Dashboard</h1>
                    <p className={styles.subtitle}>Monitor credit usage and transactions for My Space</p>
                </div>
                <div className={styles.headerButtons}>
                    <button className={styles.viewBilling}>View Billing</button>
                    <button className={styles.addCredits}>Add Credits</button>
                </div>
            </div>

            <div className={styles.gridContainer}>
                {/* Credit Summary Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Credit Summary</h2>
                        <p className={styles.subtext}>Your current credit status</p>
                    </div>
                    <div className={styles.creditStats}>
                        <div className={styles.creditItem}>
                            <span className={styles.label}>Credits Remaining</span>
                            <span className={styles.value}>0</span>
                        </div>
                        <div className={styles.creditItem}>
                            <span className={styles.label}>Credits Used</span>
                            <span className={styles.value}>0</span>
                        </div>
                        <div className={styles.creditItem}>
                            <span className={styles.label}>Total Credits Added</span>
                            <span className={styles.value}>0</span>
                        </div>
                        <div className={styles.creditItem}>
                            <span className={styles.label}>Usage Rate</span>
                            <div className={styles.usageRate}>
                                <span className={styles.value}>0.0%</span>
                                <span className={styles.status}>Normal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Usage Trends Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Usage Trends</h2>
                        <p className={styles.subtext}>Track your credit usage over time</p>
                        <select className={styles.periodSelect} defaultValue="7">
                            <option value="7">Last 7 days</option>
                            <option value="30">Last 30 days</option>
                            <option value="90">Last 90 days</option>
                        </select>
                    </div>
                    <div className={styles.trendChart}>
                        {/* Chart will be implemented later */}
                    </div>
                </div>

                {/* Enrichment Usage Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Enrichment Usage</h2>
                        <p className={styles.subtext}>Service usage breakdown</p>
                    </div>
                    <div className={styles.enrichmentList}>
                        <div className={styles.enrichmentItem}>
                            <div className={styles.enrichmentInfo}>
                                <span>Email Verification</span>
                                <span>85%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className={styles.enrichmentItem}>
                            <div className={styles.enrichmentInfo}>
                                <span>Phone Validation</span>
                                <span>40%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '40%' }}></div>
                            </div>
                        </div>
                        <div className={styles.enrichmentItem}>
                            <div className={styles.enrichmentInfo}>
                                <span>Address Lookup</span>
                                <span>85%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className={styles.enrichmentItem}>
                            <div className={styles.enrichmentInfo}>
                                <span>Identity Check</span>
                                <span>25%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '25%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Recent Transactions</h2>
                        <p className={styles.subtext}>Your latest credit activities</p>
                    </div>
                    <div className={styles.transactionList}>
                        <table className={styles.transactionTable}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index}>
                                        <td>{transaction.date}</td>
                                        <td>{transaction.description}</td>
                                        <td className={styles.negative}>{transaction.amount}</td>
                                        <td><span className={styles.usedStatus}>{transaction.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}