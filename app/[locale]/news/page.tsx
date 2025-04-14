import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import { getTranslations } from "next-intl/server";
import NewsBox from "./components/NewsBox/NewsBox";
import Image from "next/image";

const News = async () => {
  const t = await getTranslations("News");
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            {t("Main")}
          </Link>
          <Image src={"/arrowright.svg"} alt="arrow" width={24} height={22} />

          <Link href="/news" className={styles.cobbler}>
            {t("News")}
          </Link>
        </div>
        <h1>
          {t("NewsHeading")}{" "}
          <span className={styles.underLine}>{t("Cobbler")}</span>
        </h1>
        <div className={styles.container}>
          <NewsBox
            id={"1"}
            image={"/news1.png"}
            date={"28 მარტი 2025"}
            title={t("Title1")}
            description={t("Description1")}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
