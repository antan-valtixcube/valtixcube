import styles from "./Service.module.scss";
import { MonitorCog, BrainCog, Microchip, Megaphone, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: <MonitorCog strokeWidth={1} size={30} />,
    title: "IT Services & Consulting",
    description: [
      "Custom software development",
      "Web & mobile application development",
      "Cloud, architecture & system optimization",
      "Technical consulting & implementation",
    ],
  },
  {
    icon: <BrainCog strokeWidth={1} size={30} />,
    title: "SaaS & Product Development",
    description: [
      "SaaS product ideation & validation",
      "MVP development & scaling",
      "Product strategy & UX design",
      "Performance, security & scalability",
    ],
  },
  {
    icon: <Microchip strokeWidth={1} size={30} />,
    title: "AI & Intelligent Solutions",
    description: [
      "AI-powered automation",
      "Predictive analytics & insights",
      "Computer vision & data-driven systems",
      "AI integration into products & workflows",
    ],
  },
  {
    icon: <Megaphone strokeWidth={1} size={30} />,
    title: "Digital Marketing & Growth",
    description: [
      "Performance marketing & SEO",
      "Growth strategy & funnels",
      "Branding & go-to-market planning",
      "Analytics & conversion optimization",
    ],
  },
  {
    icon: <BrainCircuit strokeWidth={1} size={30} />,
    title: "Content & Experience Management",
    description: [
      "Content strategy & creation",
      "CMS implementation & optimization",
      "UX-focused storytelling",
      "Engagement-driven digital experiences",
    ],
  },
];

export default function Service() {
  return (
    <section className={styles.services}>
        <span className={styles.tag}>⚙️ OUR CORE SERVICES</span>
        <h2 className={styles.heading}>
          Transforming Ideas Into Scalable Solutions.
        </h2>
      <div className={styles.container}>

        

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <ul className={styles.description}>
                {service.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <a className={styles.learnmore} href="#">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
