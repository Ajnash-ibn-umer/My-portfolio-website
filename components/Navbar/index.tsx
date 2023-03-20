import styles from "./navbar.module.css";
import logo from "../../images/my-logo.png";
import Image from "next/image";
function Navbar() {
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.logo}>
          <Image width={"40"} src={logo} alt="logo ajnash" />
        
        </div>
        <div className={styles.linkSection}>
          <div className={styles.linkArray}>
            <div className={styles.link}>
              <span>About me</span>
            </div>
            <div className={styles.link}>
              <span>Works</span>
            </div>
            <div className={styles.link}>
              <span>MyStory</span>
            </div>
            <div className={styles.link}>
              <span>Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
