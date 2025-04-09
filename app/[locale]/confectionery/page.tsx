import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import FoodBox from "../components/FoodBox/FoodBox";
import { getTranslations } from "next-intl/server";
import { confectioneryItemsData } from "./utils/confectionery-items";

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
          {confectioneryItemsData.map((item, index) => (
            <FoodBox
              key={index}
              image={item.image}
              dessert={t("ConfectioneryHeading")}
              title={t(item.titleKey)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Confectionery;
