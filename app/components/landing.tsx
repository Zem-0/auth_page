"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import { Navbar } from "./navbar";

export function LandingPage() {
    const router = useRouter();

    return (
        <div className={styles.landingContainer}>
            <Navbar />
            <main className={styles.landingMain}>
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Secure Authentication Made Simple
                        </h1>
                        <p className={styles.heroDescription}>
                            SuperTokens provides enterprise-grade authentication for your Next.js applications.
                            Built with security and developer experience in mind.
                        </p>
                        <div className={styles.heroButtons}>
                            <button 
                                className={styles.primaryButton}
                                onClick={() => router.push("/auth")}
                            >
                                Get Started
                            </button>
                            <button 
                                className={styles.secondaryButton}
                                onClick={() => window.open('https://supertokens.com/docs', '_blank')}
                            >
                                View Documentation
                            </button>
                        </div>
                    </div>
                </section>

                <section id="features" className={styles.featuresSection}>
                    <h2 className={styles.sectionTitle}>Key Features</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h3>Email & Password</h3>
                            <p>Secure email and password authentication with built-in security features.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Session Management</h3>
                            <p>Robust session handling with automatic token refresh and security.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>OAuth Integration</h3>
                            <p>Easy integration with popular OAuth providers like Google, GitHub, and more.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Multi-factor Auth</h3>
                            <p>Support for multiple authentication factors to enhance security.</p>
                        </div>
                    </div>
                </section>

                <section id="about" className={styles.aboutSection}>
                    <div className={styles.aboutContent}>
                        <h2 className={styles.sectionTitle}>About SuperTokens</h2>
                        <p className={styles.aboutDescription}>
                            SuperTokens is an open-source authentication solution that helps you implement
                            secure authentication in your applications. It's designed to be easy to use
                            while maintaining enterprise-grade security standards.
                        </p>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>© 2024 SuperTokens Demo. All rights reserved.</p>
                    <div className={styles.footerLinks}>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="https://github.com/supertokens/supertokens-core">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
} 