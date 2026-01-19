import Link from "next/link";
import styles from "./Footer.module.scss";
import { Linkedin, Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>

          {/* COLUMN 1 */}
          <div className={styles.col}>
            <h4>Valtixcube</h4>
            <span className={styles.line} />

            <ul className={styles.foot}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/who-we-serve">Who We Serve</Link></li>
              <li><Link href="/case-study">Case Study</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-condition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className={`${styles.col} ${styles.map}`}>
            <h4>Get social</h4>
            <span className={styles.line} />

            <div className={styles.socials}>
              <span><Linkedin size={18} strokeWidth={1} /></span>
              <span><Instagram size={18} strokeWidth={1} /></span>
              <span><Facebook size={18} strokeWidth={1} /></span>
              <span><X size={18} strokeWidth={1} /></span>
            </div>

            <div className={styles.subscribe}>
              <input placeholder="Type email and hit enter" />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className={styles.col}>
            <h4>Our Offices</h4>
            <span className={styles.line} />

            <div className={styles.address}>
              <strong>Chennai Office</strong>
              <p>+91-800 123 4567</p>
              <p>contact@valtixcube.com</p>
            </div>

            <div className={styles.address}>
              <strong>Coimbatore Office</strong>
              <p>+91-800 123 4567</p>
              <p>contact@valtixcube.com</p>
            </div>
          </div>

        </div>
      </footer>

      {/* COPYRIGHT BAR */}
      <div className={styles.copyright}>
        © Copyright {new Date().getFullYear()} | ValtixCube — Powering Businesses with Technology, AI & Growth
      </div>
    </>
  );
}
