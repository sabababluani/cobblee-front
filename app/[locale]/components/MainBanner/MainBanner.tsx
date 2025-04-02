import Button from "../Button/Button";
import styles from "./MainBanner.module.scss";
import { useTranslations } from "next-intl";

const MainBanner = () => {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>{t("Heading")}</h1>
        <p>{t("MainContent")}</p>
      </div>
      <Button title={t("More")} />
    </div>
  );
};

export default MainBanner;
