// app/components/AboutHero/AboutHero.tsx
import Link from "next/link";
import styles from "./About.module.scss";

export default function AboutHero() {
    return (
        <section className={styles.aboutHero}>
            <div className={styles.container}>
                {/* ================= Top Content ================= */}
                <div className={styles.top}>
                    <span className={styles.badge}>Who We Serve</span>
                    <h1>
                        We don’t chase industries.
                    </h1>
                    <p>
                        We partner with organizations where technology must deliver measurable outcomes, not just features.
                    </p>
                    <p>At ValtixCube, we work with teams solving high-impact, real-world problems—using product thinking, AI, and scalable engineering.</p>
                </div>

                {/* ================= Visual Grid ================= */}
                <div className={styles.visualGrid}>
                    <div className={styles.imageLarge}>
                        <img src="/about-02.jpg" alt="Team collaboration" />
                    </div>

                    <div className={styles.quoteCard}>
                        <span>Our Goal</span>
                        <p>
                            “We believe that it takes great people to deliver a great product”
                        </p>
                    </div>

                    <div className={styles.imageSmall}>
                        <img src="/about-03.jpg" alt="Creative work" />
                    </div>

                    <div className={styles.imageWide}>
                        <img src="/about-01.jpg" alt="Office meeting" />
                        {/* <button className={styles.videoBtn}>▶ Watch our story</button> */}
                    </div>
                </div>

                {/* ================= Bottom Content ================= */}
                <div className={styles.bottomGrid}>
                    <div className={styles.features}>
                        <div className={styles.featureCard}>
                            <h4>HR, Recruitment & Enterprise Platforms</h4>
                            <p>Helping organizations reduce hiring friction, automate screening, and improve recruiter productivity through intelligent, workflow-driven platforms.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>Retail, ERP & Inventory-Driven Businesses</h4>
                            <p>Enabling better operational control, inventory visibility, and sales efficiency through unified systems and automation.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>E-commerce & Digital Commerce</h4>
                            <p>Supporting fast-growing commerce businesses with scalable platforms, seamless integrations, and operational reliability.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>Healthcare & MedTech</h4>
                            <p>Building reliable, secure, and compliant digital solutions for healthcare workflows and connected medical systems.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>Real Estate & Property Management</h4>
                            <p>Modernizing property operations, sales workflows, and visibility across inventory, leads, and performance.</p>
                        </div>
                    </div>

                    <div className={styles.aboutText}>
                        <h3>Where We Add the Most Value</h3>
                        <p>
                            Our expertise isn’t defined by the industry you operate in, but by the complexity of the problems you need to solve. We work with teams facing real operational, technical, and scalability challenges—where technology must deliver measurable outcomes, not just features. Through strong product thinking and a deep understanding of business needs, we help shape ideas into clear, practical, and impactful solutions.
                        </p>
                                               
                        {/* Content */}
                            <div className={styles.content}>

                                <div className={styles.hr}></div>

                                <p className={styles.desc}>
                                    At the heart of our approach is a commitment to building robust and
                                    scalable platforms that support the evolving needs of modern
                                    businesses.
                                </p>

                                <ul className={styles.list}>
                                    <li>Outcome-Driven Technology</li>
                                    <li>Product-First Thinking</li>
                                    <li>AI-Enabled Solutions</li>
                                    <li>Scalable Engineering</li>
                                    <li>Hiring Automation</li>
                                    <li>Operational Visibility</li>
                                    <li>Commerce Scalability</li>
                                    <li>Secure Healthcare Systems</li>
                                    <li>Property Workflow Modernization</li>
                                    <li>Enterprise-Grade Reliability</li>
                                </ul>

                            </div>
                        
                        <div className={styles.actions}>
                            <Link href="/services" className={styles.primary}>Explore services</Link>
                            <button className={styles.link}>Request a quote →</button>
                        </div>
                    </div>
                </div>
              


            </div>
        </section>
    );
}

