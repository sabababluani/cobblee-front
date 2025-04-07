import { getTranslations } from "next-intl/server";
import styles from "./AboutUsStats.module.scss";
import StatsBox from "./components/StatsBox/StatsBox";

const AboutUsStats = async () => {
  const t = await getTranslations("AboutUs");
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.line1}></div>
          <StatsBox quantity={"100,000"} label={t("Visitors")} />
          <div className={styles.line2}></div>
          <StatsBox quantity={"200"} label={t("Events")} />
          <div className={styles.line3}></div>
          <StatsBox quantity={"100,000"} label={t("CurrentProjects")} />
          <div className={styles.line4}></div>
          <StatsBox quantity={"5"} label={t("Experience")} />
          <div className={styles.line5}></div>
        </div>
      </div>
      <div className={styles.wrapperTablet}>
        <div className={styles.containerTablet}>
          <div className={styles.containerWrapper}>
            <div className={`${styles.tablet} ${styles.tabletFirst}`}>
              <StatsBox quantity={"100,000"} label={t("Visitors")} />
              <div className={styles.line2tablet}></div>
              <div className={styles.position}>
                <StatsBox quantity={"200"} label={t("Events")} />
              </div>
            </div>
            <div className={styles.tablet}>
              <StatsBox quantity={"100,000"} label={t("CurrentProjects")} />
              <div className={styles.line4tablet}></div>
              <StatsBox quantity={"5"} label={t("Experience")} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperMobile}>
        <div className={styles.containerMobile}>
          <StatsBox quantity={"100,000"} label={t("Visitors")} />
          <div className={styles.line2Mobile}></div>
          <StatsBox quantity={"200"} label={t("Events")} />
          <div className={styles.line3Mobile}></div>
          <StatsBox quantity={"100,000"} label={t("CurrentProjects")} />
          <div className={styles.line4Mobile}></div>
          <StatsBox quantity={"5"} label={t("Experience")} />
          <div className={styles.line5Mobile}></div>
        </div>
      </div>
    </>
  );
};

export default AboutUsStats;
