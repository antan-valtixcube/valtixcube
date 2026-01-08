import styles from "./WorkProcess.module.scss";
import { BrainCog, ServerCog, Scale3D, Columns3Cog } from "lucide-react";

const steps = [
  {
    title: "Strategy",
    description:
      "Understand your business goals, users, and challenges to define a clear, data-driven roadmap.",
    icon: <BrainCog strokeWidth={1} size={50} />,
  },
  {
    title: "Build",
    description:
      "Design and develop scalable, high-performance solutions with speed, quality, and precision.",
    icon: <ServerCog strokeWidth={1} size={50} />,
  },
  {
    title: "Scale",
    description:
      "Expand features, infrastructure, and capabilities to support growth and increasing demand.",
    icon: <Scale3D strokeWidth={1} size={50} />,
  },
  {
    title: "Optimize",
    description:
      "Continuously improve performance and outcomes using analytics, AI, and real-world insights.",
    icon: <Columns3Cog strokeWidth={1} size={50} />,
  },
];

export default function WorkProcess() {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <span className={styles.tag}>OUR APPROACH</span>

        <h2 className={styles.heading}>
          We are building great future
          <br />
          together, Be with us
        </h2>


        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{step.icon}</div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              {index !== steps.length - 1 && (
                <div className={styles.arrow}>
                  <img src="/shape-arrow.webp" alt="Arrow Right" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
