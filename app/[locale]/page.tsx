import ContentBox from "./components/ContentBox/ContentBox";
import MainBanner from "./components/MainBanner/MainBanner";
import styles from "./page.module.css";
import AboutUsBox from "./components/AboutUsBox/AboutUsBox";
import { getTranslations } from "next-intl/server";
import BrandedSection from "./components/BrandedSection/BrandedSection";
import Testemonials from "./components/Testemonials/Testemonials";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className={styles.wrapper}>
      <MainBanner />
      <div className={styles.content}>
        <div className={styles.container}>
          <ContentBox image="/coffee.svg" content={t("CoffeeCupBox")} />
          <ContentBox image="/Wifi.svg" content={t("WifiBox")} />
          <ContentBox image="/cup.svg" content={t("DessertBox")} />
          <ContentBox image="/beans.svg" content={t("CoffeeBeansBox")} />
        </div>
      </div>
      <div className={styles.aboutUs}>
        <AboutUsBox />
      </div>
      <div className={styles.brandedSection}>
        <BrandedSection />
      </div>
      <div className={styles.testemonials}>
        <Testemonials />
      </div>
    </div>
  );
}
