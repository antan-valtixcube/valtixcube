"use client";
import { useState } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.frame}>
          <a href="tel:+919999999999" className={styles.item}>
            <Phone strokeWidth={1} size={14} />
          </a>
          <span className={styles.divider}></span>
          <a href="mailto:contact@valtixcube.com" className={styles.item}>
            <Mail strokeWidth={1} size={14} /> Contact Us
          </a>
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

            <li className={styles.hasSubmenu}>
              <span>
                <Link href="/about">About Us</Link>
                <ChevronDown size={14} strokeWidth={1} />
              </span>

              <div className={styles.submenu}>
                <Link href="/about">Who We Are</Link>
                <Link href="/who-we-serve">Who We Serve</Link>
              </div>
            </li>

            <li><Link href="/case-study">Case Study</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* HAMBURGER */}
        <button
          className={`${styles.hamburger} ${open ? styles.active : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        <Link href="/">Home</Link>

        <div className={styles.mobileSubmenu}>
          <button onClick={() => setAboutOpen(!aboutOpen)}>
            About Us <ChevronDown size={14} />
          </button>

          {aboutOpen && (
            <div className={styles.mobileSubmenuItems}>
              <Link href="/about">Who We Are</Link>
              <Link href="/who-we-serve">Who We Serve</Link>
            </div>
          )}
        </div>

        <Link href="/case-study">Case Study</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </header>
  );
}
