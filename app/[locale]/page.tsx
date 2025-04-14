import ContentBox from "./components/ContentBox/ContentBox";
import MainBanner from "./components/MainBanner/MainBanner";
import styles from "./page.module.css";
import AboutUsBox from "./components/AboutUsBox/AboutUsBox";
import { getTranslations } from "next-intl/server";
import BrandedSection from "./components/BrandedSection/BrandedSection";
import Testemonials from "./components/Testemonials/Testemonials";
import ContactSection from "./components/ContactSection/ContactSection";
import BlurBackground from "./components/FirstBackground/FirstBackground";
import { contentBoxesData } from "./utils/content-boxes";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className={styles.wrapper}>
      <BlurBackground />
      <MainBanner />
      <div className={styles.content}>
        <div className={styles.container}>
          {contentBoxesData.map((item, index) => (
            <ContentBox
              key={index}
              image={item.image}
              content={t(item.contentKey)}
            />
          ))}
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
      <div className={styles.contactSection}>
        <ContactSection />
      </div>
    </div>
  );
}
