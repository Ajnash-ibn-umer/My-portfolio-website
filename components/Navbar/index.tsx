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
      
      </div>
    </>
  );
}

export default Navbar;
