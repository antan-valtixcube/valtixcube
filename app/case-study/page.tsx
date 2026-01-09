// app/components/CaseStudies/CaseStudies.tsx
import styles from "./CaseStudies.module.scss";

const caseStudies = [
  {
    industry: "HR, Recruitment & Enterprise Platforms",
    challenge:
      "Hiring teams face slow recruitment cycles, heavy manual screening, inconsistent candidate experience, and limited visibility into hiring performance.",
    built: [
      "AI-powered recruitment and screening platforms",
      "Intelligent resume parsing and candidate shortlisting",
      "Automated communication and follow-up workflows",
      "Hiring dashboards and recruiter productivity tools",
    ],
    impact: [
      "Reduced manual screening effort",
      "Faster hiring cycles",
      "Improved recruiter efficiency and candidate experience",
    ],
    img: '/hr.jpg',
  },
  {
    industry: "Retail, ERP & Inventory-Driven Businesses",
    challenge:
      "Retail and distribution businesses struggle with disconnected inventory systems, manual reconciliation, low sales visibility, and inefficient agent workflows.",
    built: [
      "Unified ERP and inventory management platforms",
      "Agent-based sales and commission management systems",
      "Order lifecycle tracking and reporting dashboards",
      "Mobile-first applications for retail and field teams",
    ],
    impact: [
      "Centralized operational control",
      "Improved stock visibility and decision-making",
      "Reduced manual errors and operational overhead",
    ],
    img: '/inventry.jpg',
  },
  {
    industry: "E-commerce & Digital Commerce Platforms",
    challenge:
      "Growing ecommerce businesses face integration complexity, operational bottlenecks, scalability challenges, and declining customer experience as they expand.",
    built: [
      "End-to-end ecommerce and marketplace platforms",
      "Multi-application ecosystems (customer, admin, delivery, partner)",
      "Integrations with payments, logistics, and POS systems",
      "Partner onboarding and channel management tools",
    ],
    impact: [
      "Scalable ecommerce operations",
      "Faster partner integrations and go-lives",
      "Improved order success rates and operational control",
    ],
    img: '/ecom.jpg',
  },
  {
    industry: "Healthcare & MedTech Products",
    challenge:
      "Healthcare products require high reliability, secure data handling, offline-first workflows, and seamless integration with medical devices.",
    built: [
      "AI-enabled diagnostic and medical applications",
      "Smart device and sensor-integrated platforms",
      "Medical kiosks and self-assessment systems",
      "Secure backend systems and data pipelines",
    ],
    impact: [
      "Improved diagnostic and clinical workflows",
      "Reliable device-to-cloud data synchronization",
      "Secure, compliant handling of medical data",
    ],
    img: '/healthcare.jpg',
  },
  {
    industry: "Real Estate & Property Management Systems",
    challenge:
      "Real estate businesses rely heavily on manual processes, spreadsheets, and disconnected tools, leading to low visibility and poor conversion tracking.",
    built: [
      "Property inventory and availability management systems",
      "Sales and leasing workflow platforms",
      "Lead tracking, booking, and documentation tools",
      "Revenue, occupancy, and performance dashboards",
    ],
    impact: [
      "Improved inventory and availability control",
      "Better lead-to-conversion visibility",
      "Reduced manual operational effort",
    ],
    img: '/realstate.jpg',
  },
];

export default function CaseStudies() {
  return (
    <section className={styles.caseStudies}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Industries We've Delivered Impact In</h2>
          <p>
            At ValtixCube, we work with organizations where technology must deliver outcomes, not just features.
            Below are industries where we have hands-on experience solving pressing, real-world challenges.
          </p>
        </header>

        <div className={styles.grid}>
          {caseStudies.map((item, index) => (
            <section className={styles.section} key={index}>
                <article className={styles.card}>
                <h3>{item.industry}</h3>

                <div className={styles.block}>
                    <span>The Challenge</span>
                    <p>{item.challenge}</p>
                </div>

                <div className={styles.block}>
                    <span>What We Built</span>
                    <ul>
                    {item.built.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                    </ul>
                </div>

                <div className={styles.block}>
                    <span>Impact Delivered</span>
                    <ul>
                    {item.impact.map((i, idx) => (
                        <li key={idx}>{i}</li>
                    ))}
                    </ul>
                </div>
                </article>
                <div className={styles.images}>
                    <img src={item.img} alt={item.industry} />
                </div>
            </section>
          ))}
        </div>

        <footer className={styles.footer}>
          <h4>We Go Where the Problem Is Real</h4>
          <p>
            Our expertise isn’t limited by industry—it’s defined by the complexity of the problem.
            If your challenge demands strong product thinking, AI-driven solutions, and reliable execution,
            ValtixCube is built for it.
          </p>
        </footer>
      </div>
    </section>
  );
}


