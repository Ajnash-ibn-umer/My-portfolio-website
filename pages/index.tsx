import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import HomeSec from "@/components/Home";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import img from '../images/oc-on-the-laptop.svg'
import insta from '../images/icons8-instagram.svg'
import github from '../images/icons8-github.svg'
import linkedin from '../images/icons8-linkedin.svg'
import home from '../images/profile.svg'
import abtBtn from '../images/about.svg'
import {useRouter} from 'next/router'

export default function Home() {
const [width,setWidth]=useState<any>("500")
const router=useRouter()
  useEffect(()=>{
    typeof window !="undefined" && window.innerWidth > 1000 ? setWidth("500") :setWidth("250")
  })
  return (
    <>
      <Head>
        <title>Ajnash</title>
        <meta name="description" content="The developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.mainSection} >
          <div className={styles.leftSection} >
            <div className={styles.heading} >
              Hai,<br />
              Iam <span>Ajnash</span>  <br />
              Welcome to <span> my world</span>
            </div>
          </div>
          <div className={styles.rightSection} >
            <Image className={styles.headImg} src={img} width={width} alt="laptop-icon" />
          </div>

        </div>
 <Foot />
      </div>
<NavBar />
    </>
  );
}
export const Foot=()=>{
  return<>
         <div className={styles.footerSection}>
          <div className={styles.socials} >
            <div className={styles.icons}>
           <a href="https://www.instagram.com/ajnash_ibn_umer/">
           <Image  alt="photinst" width={"50"} src={insta} />
            </a>   
            <a href="https://github.com/Ajnash-ibn-umer">
            <Image  alt="git" width={"50"} src={github} />

            </a>
            <a href="https://www.linkedin.com/in/ajnash-developer/">
            <Image alt="linkedin" width={"50"} src={linkedin} />

            </a>
            </div>

            <span>Copyright © 2022-2024 <br />
              ajnash.k02@gmail.com —— +91-9037535152</span>

          </div>
        </div>
  </>
}

export const NavBar=()=>{
  const router=useRouter()
  return(<>
  <div className={styles.navBar} >
  <div onClick={()=>router.push('/')} style={router.pathname==="/" ?{background:"#37B350"}:{background:"#0000"}}  className={styles.homeBtn} >
    <Image alt="home" width="50" color="white" src={home} />
  </div>
  <div onClick={()=>router.push('/about-us')} style={router.pathname==="/about-us" ?{background:"#37B350"}:{background:"#0000"}} className={styles.aboutBtn} >
  <Image alt="about" width="50" src={abtBtn} />

  </div>

</div>
<div className={styles.navBarDummy}>

</div>
  
  </>)
}