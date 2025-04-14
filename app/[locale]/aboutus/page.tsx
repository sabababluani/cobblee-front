import { getTranslations } from "next-intl/server";
import styles from "./page.module.scss";
import AboutUsStats from "./components/AboutUsStats/AboutUsStats";
import ContentBox from "../components/ContentBox/ContentBox";
import Image from "next/image";

const AboutUs = async () => {
  const t = await getTranslations("AboutUs");
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h1>{t("AboutUsHeading")}</h1>
        <div className={styles.mouse}>
          <div className={styles.cursor}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.containerText}>
          <span className={styles.text}>
            {t("AboutUsText1")}
            <br />
            <br />
            {t("AboutUsText2")}
          </span>
        </div>
      </div>
      <AboutUsStats />
      <div className={styles.boxesContainer}>
        <div className={styles.container}>
          <ContentBox image="/coffee.svg" content={t("CoffeeCupBox")} />
          <ContentBox image="/Wifi.svg" content={t("WifiBox")} />
          <ContentBox image="/cup.svg" content={t("DessertBox")} />
          <ContentBox image="/beans.svg" content={t("CoffeeBeansBox")} />
        </div>
        <div className={styles.collage}>
          <div className={styles.collageWrapper}>
            <Image
              src={"/phone.png"}
              alt="Girl holding Phone"
              width={360}
              height={321}
            />
            <Image
              src={"/aboutUsPicture.png"}
              alt="Girl holding Phone"
              width={745}
              height={361}
            />
            <Image
              src={"/caffeFront.png"}
              alt="Girl holding Phone"
              width={359}
              height={361}
            />
            <Image
              src={"/mainBackground.png"}
              alt="Girl holding Phone"
              width={1000}
              height={361}
            />
            <Image
              src={"/girlCoffe.png"}
              alt="Girl holding Phone"
              width={488}
              height={361}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
