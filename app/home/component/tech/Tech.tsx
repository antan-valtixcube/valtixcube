
import styles from './Tech.module.scss';
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab corrupti, quasi? Beatae cumque maiores.
                    </p>
                </div>

                <div className={styles.feature}>
                    <div className={styles.feature__icon}>
                        <TabletSmartphone size={36} strokeWidth={1} />
                    </div>
                    <h3 className={styles.feature__title}>Mobile Development</h3>
                    <span className={styles.feature__divider}></span>
                    <p className={styles.feature__desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab corrupti, quasi? Beatae cumque maiores.
                    </p>
                </div>

                <div className={styles.feature}>
                    <div className={styles.feature__icon}>
                        <CloudCog size={36} strokeWidth={1} />
                    </div>
                    <h3 className={styles.feature__title}>Cloud Computing</h3>
                    <span className={styles.feature__divider}></span>
                    <p className={styles.feature__desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab corrupti, quasi? Beatae cumque maiores.
                    </p>
                </div>

            </div>
        </section>
    );
}