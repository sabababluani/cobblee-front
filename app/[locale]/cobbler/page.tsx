import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import FoodBox from "../components/FoodBox/FoodBox";
import { getTranslations } from "next-intl/server";

const Cobbler = async () => {
  const t = await getTranslations("HomePage");
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            მთავარი
          </Link>
          <span>{">"}</span>
          <Link href="/cobbler" className={styles.cobbler}>
            ქობლერი
          </Link>
        </div>
        <div className={styles.container}>
          <FoodBox
            image={"/iceCream1.png"}
            dessert={t("Dessert")}
            title={t("Berries")}
          />
          <FoodBox
            image={"/iceCream2.png"}
            dessert={t("Dessert")}
            title={t("ApplePearCinnamon")}
          />
          <FoodBox
            image={"/iceCream3.png"}
            dessert={t("Dessert")}
            title={t("DubaiChocolate")}
          />
          <FoodBox
            image={"/iceCream4.png"}
            dessert={t("Dessert")}
            title={t("MangoPassionFruit")}
          />
          <FoodBox
            image={"/iceCream5.png"}
            dessert={t("Dessert")}
            title={t("Kiwi")}
          />
          <FoodBox
            image={"/iceCream6.png"}
            dessert={t("Dessert")}
            title={t("Strawberry")}
          />
        </div>
      </div>
    </div>
  );
};

export default Cobbler;
