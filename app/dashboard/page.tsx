"use client";

import styles from './page.module.css';

export default function DashboardPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Dashboard</h1>
                    <p className={styles.subtitle}>Monitor credit usage and transactions for My Space</p>
                </div>
                <div className={styles.actions}>
                    <button className={styles.viewBilling}>View Billing</button>
                    <button className={styles.addCredits}>Add Credits</button>
                </div>
            </div>

            <div className={styles.grid}>
                {/* Credit Summary Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Credit Summary</h2>
                        <p className={styles.cardSubtitle}>Your current credit status</p>
                        <button className={styles.expandButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.creditStats}>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>Credits Remaining</span>
                            <span className={styles.statValue}>0</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>Credits Used</span>
                            <span className={styles.statValue}>0</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>Total Credits Added</span>
                            <span className={styles.statValue}>0</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>Usage Rate</span>
                            <div className={styles.usageRate}>
                                <span className={styles.rateValue}>0.0%</span>
                                <span className={styles.rateStatus}>Normal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Usage Trends Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h2>Usage Trends</h2>
                            <p className={styles.cardSubtitle}>Track your credit usage over time</p>
                        </div>
                        <div className={styles.cardActions}>
                            <select className={styles.periodSelect}>
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                                <option>Last 90 days</option>
                            </select>
                            <button className={styles.expandButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={styles.trendChart}>
                        {/* Chart will be implemented later */}
                    </div>
                </div>

                {/* Enrichment Usage Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h2>Enrichment Usage</h2>
                            <p className={styles.cardSubtitle}>Service usage breakdown</p>
                        </div>
                        <button className={styles.expandButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.usageList}>
                        <div className={styles.usageItem}>
                            <div className={styles.usageHeader}>
                                <span>Email Verification</span>
                                <span>65%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '65%', backgroundColor: '#000000' }}></div>
                            </div>
                        </div>
                        <div className={styles.usageItem}>
                            <div className={styles.usageHeader}>
                                <span>Phone Validation</span>
                                <span>40%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '40%', backgroundColor: '#3B82F6' }}></div>
                            </div>
                        </div>
                        <div className={styles.usageItem}>
                            <div className={styles.usageHeader}>
                                <span>Address Lookup</span>
                                <span>85%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '85%', backgroundColor: '#3B82F6' }}></div>
                            </div>
                        </div>
                        <div className={styles.usageItem}>
                            <div className={styles.usageHeader}>
                                <span>Identity Check</span>
                                <span>25%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: '25%', backgroundColor: '#3B82F6' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h2>Recent Transactions</h2>
                            <p className={styles.cardSubtitle}>Your latest credit activities</p>
                        </div>
                        <div className={styles.cardActions}>
                            <button className={styles.allTransactions}>All Transactions</button>
                            <button className={styles.expandButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <table className={styles.transactionsTable}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Invalid Date</td>
                                <td>Credits used</td>
                                <td className={styles.negative}>-0.23</td>
                                <td><span className={styles.usedStatus}>Used</span></td>
                            </tr>
                            <tr>
                                <td>Invalid Date</td>
                                <td>Credits used</td>
                                <td className={styles.negative}>-0.23</td>
                                <td><span className={styles.usedStatus}>Used</span></td>
                            </tr>
                            <tr>
                                <td>Invalid Date</td>
                                <td>Credits used</td>
                                <td className={styles.negative}>-0.23</td>
                                <td><span className={styles.usedStatus}>Used</span></td>
                            </tr>
                            <tr>
                                <td>Invalid Date</td>
                                <td>Credits used</td>
                                <td className={styles.negative}>-1</td>
                                <td><span className={styles.usedStatus}>Used</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}