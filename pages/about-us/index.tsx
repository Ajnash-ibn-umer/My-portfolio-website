import Image from "next/image";
import { Foot, NavBar } from "../index";
import styles from './styles.module.css'
import Who from '../../images/nc-no-answer.svg'
import me from '../../images/ec-launch-project.svg'
import {skills} from '../../scripts/skills'
import { useEffect, useState } from "react";

export default function About() {
const [width,setWidth]=useState<any>("765")
useEffect(()=>{
  typeof window !="undefined" && window.innerWidth > 1000 ? setWidth("765") :setWidth("250")
},[])
  return (
    <>

      <div className={styles.container}>
        <section className={styles.sectionMain}>
          <Image width={width} alt="whoami" src={Who} />
          <h2 className={styles.title}>Who <span>a</span>m i <span>?</span></h2>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSec}>
            <h3>LET ME INTRODUCE MY SELF</h3>
            <p>I'm AJNASH, a passionate and self-taught MERN Stack developer with a thirst for creativity and innovation. With 4 years of coding experience and 1 year of industrial exposure, I have honed my skills in JavaScript, TypeScript, Node.js, Express, React.js, Next.js, MongoDB, GraphQL, and more.

My journey as a developer began with the determination to learn and grow independently, without formal education or mentorship. Over the years, I have nurtured a deep understanding of programming principles and best practices, allowing me to craft cutting-edge web applications that deliver exceptional user experiences.

Throughout my career, I have led cross-functional teams to successfully deliver high-quality web applications using the MERN stack. My ability to analyze business requirements and translate them into technical solutions ensures that every project aligns with the highest standards of quality and functionality.

As a freelancer, I've dabbled in mobile and cross-platform game development, creating captivating experiences using Unity and C#. Additionally, I've designed dynamic and responsive websites using HTML, CSS, SASS, jQuery, and Bootstrap.

With an unwavering commitment to excellence, I actively engage in personal projects that showcase my technical prowess. ZoomClone, a real-time VideoCall web application, and SimpleChatApp, a real-time Chat web application, are among the endeavors that reflect my passion for pushing the boundaries of technology.

My goal is to create engaging and impactful web experiences that leave a lasting impression on users. Whether it's enhancing the functionality of a project or building an intuitive interface, I'm driven by the challenge of crafting elegant solutions that resonate with users.

Thank you for visiting my portfolio! I invite you to explore my projects and discover the creativity and dedication that drives me as a developer. If you have any questions or potential collaborations, feel free to reach out via the contact details provided.

Let's build something amazing together!</p>
<h3>SKILLS</h3>

         <div className={styles.skilsContainer}>
          {
            skills && skills.map((s:any,idx:any)=>{
return<>
<div key={idx} className={styles.skill}>{s}</div>

</>
            })
          }
          </div>
          </div>
         
          <div className={styles.rightSec}>
            <Image width={"155"} alt="me" src={me} />
            <a href="/images/Ajnash-k-2023.pdf" download>
              Download my CV
            </a>

          </div>
        </section >

        <section className={styles.section3}>
          <h3>MY WORKS</h3>
          <div className={styles.frameContainer}>
            <div className={styles.frame} >
              <iframe src="https://hivefreelancers.com" ></iframe>
              <h4>
                Hivefreelancers.com
              </h4>
            </div>
            <div className={styles.frame} >
              <iframe src="https://collincouture.com" ></iframe>
              <h4>
                Collincouture.com
              </h4>
            </div>
            <div className={styles.frame} >
              <iframe src="https://loop-next-six.vercel.app" ></iframe>
              <h4>
                Loop.com
              </h4>
            </div>
          </div>

        </section>
        <NavBar />
        <Foot />
      </div>
     
     
      {/* <Foot /> */}

    </>
  );
}