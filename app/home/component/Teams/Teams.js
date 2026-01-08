import Image from "next/image";
import styles from "./Team.module.scss";

const team = [
  {
    name: "Anna Smith",
    role: "Project Manager",
    image: "/team/person.jpg",
  },
  {
    name: "John Carter",
    role: "Full Stack Developer",
    image: "/team/person2.jpg",
  },
  {
    name: "Michael Lee",
    role: "Tech Lead",
    image: "/team/person3.jpg",
  },
  {
    name: "Sophia Brown",
    role: "UI/UX Designer",
    image: "/team/person4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.team}>
      <div className={styles.header}>
        <h2>The team behind all this</h2>
        <span />
      </div>

      <div className={styles.grid}>
        {team.map((member, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
            />

            <div className={styles.overlay}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>

              <div className={styles.socials}>
                <a href="#">f</a>
                <a href="#">t</a>
                <a href="#">in</a>
                <a href="#">Be</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
