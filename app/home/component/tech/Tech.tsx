
import styles from './tech.module.scss';
import { TabletSmartphone, LayoutTemplate, CloudCog } from "lucide-react";

export default function Tech() {
    return (
        <section className={styles.features}>
            <div className={styles.features__container}>

                <div className={styles.feature}>
                    <div className={styles.feature__icon}>
                        <LayoutTemplate size={36} strokeWidth={1} />
                    </div>
                    <h3 className={styles.feature__title}>Web Development</h3>
                    <span className={styles.feature__divider}></span>
                    <p className={styles.feature__desc}>
                        We build fast, secure, and scalable websites tailored to your business goals. From concept to launch, we turn ideas into powerful digital experiences.
                    </p>
                </div>

                <div className={styles.feature}>
                    <div className={styles.feature__icon}>
                        <TabletSmartphone size={36} strokeWidth={1} />
                    </div>
                    <h3 className={styles.feature__title}>Mobile Development</h3>
                    <span className={styles.feature__divider}></span>
                    <p className={styles.feature__desc}>
                        We build high-performance mobile apps for iOS and Android platforms. Secure, scalable, and designed to deliver seamless user experiences.
                    </p>
                </div>

                <div className={styles.feature}>
                    <div className={styles.feature__icon}>
                        <CloudCog size={36} strokeWidth={1} />
                    </div>
                    <h3 className={styles.feature__title}>Cloud Computing</h3>
                    <span className={styles.feature__divider}></span>
                    <p className={styles.feature__desc}>
                        Reliable cloud services for modern, always-on applications. Secure, scalable, and built for the future.
                    </p>
                </div>

            </div>
        </section>
    );
}