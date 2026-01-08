import Image from "next/image";
import styles from "./About.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.wrapper}>
        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src="/about_us.jpg" // replace with your image path
            alt="Team working together"
            fill
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <h4>About us</h4>
          <span className={styles.divider} />

          <p>
            We are a technology-driven team focused on building scalable digital
            products and intelligent solutions that solve real business problems.
            By combining strategy, design, engineering, and data, we help
            organizations grow faster and smarter.
          </p>

          <div className={styles.feature}>
            <span className={styles.icon}>♡</span>
            <div>
              <h5>Happy Clients</h5>
              <p>
                We work as long-term partners, delivering reliable solutions
                through trust, transparency, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
