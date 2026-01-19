import styles from "./PrivacyPolicy.module.scss";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({
  title,
  lastUpdated,
  children,
}: PolicyLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1>{title}</h1>
        <p className={styles.updated}>Last Updated: {lastUpdated}</p>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
