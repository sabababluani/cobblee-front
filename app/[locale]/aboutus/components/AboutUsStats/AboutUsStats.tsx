import { getTranslations } from "next-intl/server";
import styles from "./AboutUsStats.module.scss";
import StatsBox from "./components/StatsBox/StatsBox";

const AboutUsStats = async () => {
  const t = await getTranslations("AboutUs");
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <StatsBox quantity={"100,000"} label={t("Visitors")} />
        <StatsBox quantity={"200"} label={t("Events")} />
        <StatsBox quantity={"7"} label={t("CurrentProjects")} />
        <StatsBox quantity={"1"} label={t("Experience")} />
      </div>
    </div>
  );
};

export default AboutUsStats;
