import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import FoodBox from "../components/FoodBox/FoodBox";
import { getTranslations } from "next-intl/server";

const Confectionery = async () => {
  const t = await getTranslations("Confectionery");
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            {t("Main")}
          </Link>
          <span>{">"}</span>
          <Link href="/confectionery" className={styles.main}>
            {t("Menu")}
          </Link>
          <span>{">"}</span>
          <Link href="/confectionery" className={styles.cobbler}>
            {t("ConfectioneryHeading")}
          </Link>
        </div>
        <div className={styles.container}>
          <FoodBox
            image={"/cinannamon.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("Cinannamon")}
          />
          <FoodBox
            image={"/kruasani.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("Croissant")}
          />
          <FoodBox
            image={"/vanilaKruasani.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("CroissantWithVanila")}
          />
          <FoodBox
            image={"/vanilaKruasani.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("NewYorkRoll")}
          />
          <FoodBox
            image={"/raisinRoll.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("RaisinRoll")}
          />
        </div>
      </div>
    </div>
  );
};

export default Confectionery;
