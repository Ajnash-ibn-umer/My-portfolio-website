import styles from "./home.module.css";
import ProfilPic from "../../images/profile-pic (3).png";
import Image from "next/image";
function Home() {
  return (
    <>
      <div className={styles.HomeContainer}>
        <div className={styles.leftSec}>
          <div className={styles.welcomeText}>
            <span>
              Hello, I’m Ajnash ibn umer ,a Full stack Engineer working
              full-time at Credot.
            </span>
          </div>
        </div>
        <div className={styles.rightSec}>
          <div className={styles.myPic}>
            <Image alt="my-photo" src={ProfilPic} width={500} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
