"use client";

import styles from "./About.module.scss";

export default function AboutUs() {
    return (
        <div className={styles.container}>
            {/* Hero / Title Section */}
            <section className={styles.hero}>
                <h1>Your Technology & Engineering Partner for AI-Driven Solutions</h1>
                <p>
                    ValtixCube is a service-based technology and consulting company that helps businesses build, modernize, and scale digital solutions using AI, cloud, and modern engineering practices.
                </p>
                <p>
                    We partner with startups, growing companies, and enterprises to solve real business problems through custom software development, AI-enabled platforms, and scalable systems—from early-stage builds to enterprise implementations.
                </p>
            </section>
            {/* Mission & Vision Section */}
            <section className={styles.missionVision}>

                    {/* MISSION */}
                <div className={styles.missionVision_container}>
                    <div className={styles.missionVision_block}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <h2>Our Mission</h2>
                        </div>

                        <div className={styles.right}>
                            <p>
                                To be the global leader in IT Services. Building on our
                                technologies, competencies and customer interests, and creating
                                value for our stakeholders and customers.
                            </p>

                            <p>
                                We’ll achieve this by focusing on the intersection of our client’s
                                emerging needs and the acceleration of business and technological
                                change.
                            </p>
                        </div>
                    </div>
                    </div>

                </div>

                {/* VISION */}
                <div className={styles.missionVision_container}>
                    <div className={styles.missionVision_block}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <h2>Our Vision</h2>
                        </div>

                        <div className={styles.right}>
                            <p>
                                ValtixCube will be the first choice solution partner in the
                                technology sector providing IT and communication services to
                                businesses across regions.
                            </p>

                            <p>
                                We will become an integral part of our client’s success,
                                collaborating with them to achieve strategic objectives while
                                creating long-lasting business value.
                            </p>

                            <p>
                                Our team of talented, experienced, and motivated professionals
                                will be recognized as leaders in their field, driven by shared
                                success.
                            </p>
                        </div>
                    </div>
                    </div>

                </div>
            </section>




            {/* Values Block */}
            <section className={styles.values}>
                <h2>Our Core Values</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <h3>Integrity</h3>
                        <p>Honest, transparent, and ethical in everything we do.</p>
                    </div>

                    <div className={styles.valueCard}>
                        <h3>Innovation</h3>
                        <p>Always pushing ideas forward with creativity and curiosity.</p>
                    </div>

                    <div className={styles.valueCard}>
                        <h3>Collaboration</h3>
                        <p>Working together with clients and teams to create meaningful outcomes.</p>
                    </div>

                    <div className={styles.valueCard}>
                        <h3>Excellence</h3>
                        <p>Delivering high-quality results with attention to every detail.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <h2>Want to Work With Us?</h2>
                <p>
                    Let’s build remarkable experiences together.
                </p>
                <button>Contact Us</button>
            </section>
        </div>
    );
}
