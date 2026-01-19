import Link from "next/link";
import styles from "./Services.module.scss";
import {
  Layers,
  Monitor,
  Smartphone,
  Server,
  Plug,
  Database,
  Brain,
  Cloud,
  ShieldCheck,
  Settings,
  BarChart3,
  RefreshCcw,
} from "lucide-react";

const mockCards = [
  {
    title: "Application & Product Engineering",
    desc: "End-to-end design and development of scalable web and mobile products.",
    icon: <Layers strokeWidth={1} />,
  },
  {
    title: "Frontend & Experience Engineering",
    desc: "High-performance, SEO-friendly, and user-centric interfaces across platforms.",
    icon: <Monitor strokeWidth={1} />,
  },
  {
    title: "Mobile Application Development",
    desc: "Cross-platform and native mobile apps built for reliability and scale.",
    icon: <Smartphone strokeWidth={1} />,
  },
  {
    title: "Backend & API Engineering",
    desc: "Secure, scalable backend systems with API-first architectures.",
    icon: <Server strokeWidth={1} />,
  },
  {
    title: "Enterprise Integrations",
    desc: "Seamless integration of internal systems and third-party platforms.",
    icon: <Plug strokeWidth={1} />,
  },
  {
    title: "Data & Database Engineering",
    desc: "Reliable, high-performance data systems optimized for scale.",
    icon: <Database strokeWidth={1} />,
  },
  {
    title: "AI & Intelligent Automation",
    desc: "Applied AI solutions that automate workflows and enhance decisions.",
    icon: <Brain strokeWidth={1} />,
  },
  {
    title: "Cloud Architecture & DevOps",
    desc: "Cloud-native infrastructure with automated deployments and CI/CD.",
    icon: <Cloud strokeWidth={1} />,
  },
  {
    title: "Security & Reliability Engineering",
    desc: "Enterprise-grade security, compliance, and system resilience.",
    icon: <ShieldCheck strokeWidth={1} />,
  },
  {
    title: "Platform Optimization & Scalability",
    desc: "Performance tuning, load optimization, and scalability improvements.",
    icon: <Settings strokeWidth={1} />,
  },
  {
    title: "Data Analytics & Insights",
    desc: "Actionable insights through analytics, dashboards, and reporting systems.",
    icon: <BarChart3 strokeWidth={1} />,
  },
  {
    title: "System Modernization & Re-engineering",
    desc: "Modernizing legacy systems for performance, security, and future growth.",
    icon: <RefreshCcw strokeWidth={1} />,
  },
];

export default function TechnologyStack() {
  return (
    <section className={styles.stack}>
      <div className={styles.container}>

        {/* ================= HEADER ================= */}
        <div className={styles.pageHeader}>
          <h1>Services</h1>
          <p>
            We design, build, and scale technology systems that solve complex
            business problems and support long-term growth.
          </p>
        </div>

        {/* CARD GRID */}
        <div className={styles.grid}>
          {mockCards.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ================= FOOTER CTA ================= */}
        <div className={styles.pageFooter}>
          <h2>Technology That Serves the Business</h2>
          <p>
            Our clients don’t choose us for tools. They choose us because we know
            how to use technology to solve real business challenges.
          </p>

          <Link className={styles.link} href="/contact">Talk to Us</Link>
        </div>

      </div>
    </section>
  );
}
