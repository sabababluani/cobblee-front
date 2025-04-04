import { getTranslations } from "next-intl/server";
import styles from "./page.module.scss";

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
    </div>
  );
};

export default AboutUs;
