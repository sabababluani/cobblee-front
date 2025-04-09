import { Link } from "@/i18n/navigation";
import FoodBox from "../components/FoodBox/FoodBox";
import styles from "./page.module.scss";
import { getTranslations } from "next-intl/server";
import { SnackItemsData } from "./utils/snack-items.data";

const Snacks = async () => {
  const t = await getTranslations("Snacks");

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            {t("Main")}
          </Link>
          <span>{">"}</span>
          <Link href="/snacks" className={styles.main}>
            {t("Menu")}
          </Link>
          <span>{">"}</span>
          <Link href="/snacks" className={styles.cobbler}>
            {t("Snacks")}
          </Link>
        </div>

        <div className={styles.container}>
          {SnackItemsData.map((item, index) => (
            <FoodBox
              key={index}
              image={item.image}
              dessert={t("SnackHeading")}
              title={t(item.titleKey)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snacks;
