"use client";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.frame}>
          <a href="tel:+919999999999" className={styles.item}><Phone className={styles.icon} strokeWidth={1} size={14} /> +91 9791947774</a>
          <span className={styles.divider}></span>
          <a href="#" className={styles.icon}><Mail className={styles.icon} strokeWidth={1} size={16} /> Contact Us</a>
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/case-study">Case Study</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Contact Us</Link></li>
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
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
    </header>
  );
}
