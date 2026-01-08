"use client";
import { useState } from "react";
import styles from "./TechStack.module.scss";

export default function TechStack({ techStack }) {

const techStacks = [
    {
    category: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: "/tech/javascript.svg",
        desc: "Core language for web development"
      },
      {
        name: "TypeScript",
        icon: "/tech/typescript.svg",
        desc: "Type safe JavaScript for large applications"
      },
      {
        name: "HTML5",
        icon: "/tech/HTML5.svg",
        desc: "Semantic markup for modern web"
      },
      {
        name: "CSS3",
        icon: "/tech/css3.svg",
        desc: "Responsive styling and modern layouts"
      },
      {
        name: "Python",
        icon: "/tech/python.svg",
        desc: "High-level programming language for web and data science"
      }
    ]
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        icon: "/tech/react.svg",
        desc: "Interactive user interfaces with component driven design"
      },
      {
        name: "Next.js",
        icon: "/tech/nextjs.svg",
        desc: "Server side rendering and performance optimization"
      }
    ]
  },

  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "/tech/node.svg",
        desc: "Scalable backend with event driven architecture"
      },
      {
        name: "NestJS",
        icon: "/tech/nestjs.svg",
        desc: "Enterprise grade backend with TypeScript"
      },
      {
        name: "Spring Boot",
        icon: "/tech/spring.svg",
        desc: "Enterprise grade backend with Java"
      },
      // {
      //   name: "Django",
      //   icon: "/tech/django.svg",
      //   desc: "High-level Python web framework"
      // }
    ]
  },

  {
    category: "Mobile",
    items: [
      {
        name: "Flutter",
        icon: "/tech/flutter.svg",
        desc: "Cross platform mobile apps from single codebase"
      },
      {
        name: "Kotlin",
        icon: "/tech/kotlin.svg",
        desc: "Modern language for Android development"
      },
      {
        name: "Swift",
        icon: "/tech/swift.svg",
        desc: "High performance iOS application development"
      }
    ]
  },

  {
    category: "API & Integration",
    items: [
      {
        name: "GraphQL",
        icon: "/tech/graphql.svg",
        desc: "Efficient APIs with flexible queries"
      },
        {
        name: "Express.js",
        icon: "/tech/expressjs.svg",
        desc: "Minimal and flexible web framework"
        },
    ]
  },

  {
    category: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: "/tech/mongodb.svg",
        desc: "Flexible NoSQL database for scalability"
      },
      {
        name: "MySQL",
        icon: "/tech/mysql.svg",
        desc: "Reliable relational database management system"
      },
    //   {
    //     name: "Oracle",
    //     icon: "/tech/oracle.svg",
    //     desc: "Enterprise database for mission critical systems"
    //   },
      {
        name: "Redis",
        icon: "/tech/redis.svg",
        desc: "High performance in memory caching"
      },
      {
        name: "Firebase",
        icon: "/tech/firebase.svg",
        desc: "Realtime database and backend services"
      }
    ]
  },

  {
    category: "AI & Intelligence",
    items: [
      {
        name: "OpenAI",
        icon: "/tech/openai.svg",
        desc: "AI powered automation and intelligence"
      },
      {
        name: "Gemini",
        icon: "/tech/gemini.svg",
        desc: "Advanced multimodal AI and reasoning"
      }
    ]
  },

  {
    category: "Cloud & DevOps",
    items: [
      {
        name: "Docker",
        icon: "/tech/docker.svg",
        desc: "Containerized applications for consistent deployment"
      },
      {
        name: "Kubernetes",
        icon: "/tech/kubernetes.svg",
        desc: "Container orchestration and workload management"
      },
      {
        name: "AWS",
        icon: "/tech/aws.svg",
        desc: "Scalable cloud infrastructure and services"
      },
      {
        name: "Azure",
        icon: "/tech/azure.svg",
        desc: "Cloud solutions for enterprise workloads"
      },
    //   {
    //     name: "Google Cloud",
    //     icon: "/tech/gcp.svg",
    //     desc: "Cloud platform for data and AI"
    //   }
    ]
  }

  
];
  const [activeTab, setActiveTab] = useState(techStacks[0].category);
  
  const activeData = techStacks.find(t => t.category === activeTab);

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <span>Our Capabilities</span>
        <h2>TECHNOLOGIES WE WORK WITH</h2>
        <p>
          We leverage modern technologies to build scalable, secure and
          high-performance digital solutions.
        </p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {techStacks.map(tab => (
          <button
            key={tab.category}
            className={tab.category === activeTab ? styles.active : ""}
            onClick={() => setActiveTab(tab.category)}
          >
            {tab.category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {activeData.items.map((item, index) => (
          <div key={index} className={styles.cell}>
            <img src={item.icon} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
