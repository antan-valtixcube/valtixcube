import styles from "./Feature.module.scss";
import { LifeBuoy, Lightbulb, LaptopMinimalCheck, Boxes } from "lucide-react";

const features = [
  {
    title: "Top notch Support",
    description:
      "Reliable technical support and guidance to ensure smooth operation and long-term success of your product.",
    icon: <LifeBuoy strokeWidth={1} size={30} />,
  },
  {
    title: "SEO Ready",
    description:
      "Built with SEO best practices to improve visibility, performance, and search engine rankings.",
    icon: <Lightbulb strokeWidth={1} size={30} />,
  },
  {
    title: "Bootstrap Based",
    description:
      "Responsive, flexible, and mobile-first layouts using proven frontend frameworks.",
    icon: <LaptopMinimalCheck strokeWidth={1} size={30} />,
  },
  {
    title: "Working widgets",
    description:
      "Functional, reusable components designed to speed up development and enhance usability.",
    icon: <Boxes strokeWidth={1} size={30} />,
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.icon}>{feature.icon}</div>
              <div className={styles.content}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
