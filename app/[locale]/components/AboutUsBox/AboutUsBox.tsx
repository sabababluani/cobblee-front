import Image from "next/image";
import styles from "./AboutUsBox.module.scss";
import { useTranslations } from "next-intl";
import Button from "../Button/Button";
import { Link } from "@/i18n/navigation";

const AboutUsBox = () => {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.wrapper}>
      <Image
        src={"/aboutUsPicture.png"}
        alt="ice cream"
        width={744}
        height={393}
      />
      <div className={styles.content}>
        <div className={styles.container}>
          <h2>{t("HomePageAboutUsHeading")}</h2>
          <p>{t("HomePageAboutUsContent")}</p>
        </div>
        <div className={styles.button}>
          <Link href={'/aboutus'}>
            <Button title={t("More")} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBox;
