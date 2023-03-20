import styles from "./footer.module.css";
import ProfilPic from "../../images/profile-pic (3).png";
import Image from "next/image";
import { BsGithub, BsLinkedin,BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className={styles.FooterContainer}>
        <div className={styles.leftSec}>
          <div className={styles.socials}>
            <span>
              <BsGithub />
            </span>
            <span>
              <AiFillInstagram />
            </span>
            <span>
              <BsLinkedin />
            </span>
            <span>
              <FaDev />
            </span>
            <span>
              <BsTwitter />
            </span>
          </div>
          <span>Copyright © 2023-2029</span>
          <span>ajnash.k02@gmail.com —— (+91) 9037 535152</span>
        </div>
     
      </div>
    </>
  );
}

export default Footer;
