"use client";
import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.frame}>
          <a href="tel:+919999999999" className={styles.item}>📞 +91 9876543210</a>
          <span className={styles.divider}></span>
          <a href="#" className={styles.icon}>🔗</a>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className={styles.menuBar}>
        <div className={styles.logo}>
          <img src="/valtixcube.webp" alt="Logo" />
          <div className={styles.logoText}>
            <span className={styles.valtix}>Valtix</span>
            <span className={styles.cube}>Cube</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className={styles.desktopNav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* HAMBURGER */}
        <button
          className={`${styles.hamburger} ${open ? styles.active : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Tech</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}
