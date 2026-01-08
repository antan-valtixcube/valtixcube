import type { Metadata } from "next";
import Banner from "./component/banner/Banner";
import Tech from "./component/Tech/Tech";
import About from "./component/about/About";
import Service from "./component/service/Service";
import WorkProcess from "./component/workProcess/WorkProcess";
// import Team from "@/app/home/component/team/Team";
import TechStack from "./component/TechStack/TechStack";
import Feature from "./component/feature/Feature";
import styles from "../page.module.scss";




export default function Home() {
  return (
    <>
      <Banner />
      
            <div className={styles.content}>
              <Tech />
      
              <About />
      
              <Service />
      
              <WorkProcess />
      
              {/* <Team /> */}
      
              <TechStack techStack={undefined} />
      
              <Feature />
            </div>
    </>
  );
}
