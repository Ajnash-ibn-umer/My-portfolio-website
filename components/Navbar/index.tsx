import styles from "./navbar.module.css";
import logo from "../../images/my-logo.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function Navbar() {
  const router = useRouter();
  const homeLnk: any = useRef(null);

  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.logo}>
          <Image width={"40"} src={logo} alt="logo ajnash" />
        </div>
        <div className={styles.linkSection}>
          <div className={styles.linkArray}>
            <div onClick={()=>router.push('/')} className={router.pathname=='/'? styles.linkActive:styles.link}>
              <span>Me</span>
            </div>
        
            <div onClick={()=>router.push('WhoAmI')} className={router.pathname=='/WhoAmI'? styles.linkActive:styles.link}>
              <span>Who am I</span>
            </div>
        
           
            <div className={router.pathname=='/skills'? styles.linkActive:styles.link}>
              <span>Skills and Project</span>
            </div>
            <div className={router.pathname=='/blogs'? styles.linkActive:styles.link}>
              <span>Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
