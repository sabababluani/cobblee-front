import { getTranslations } from "next-intl/server";
import styles from "./BrandedSection.module.scss";
import FoodBox from "../FoodBox/FoodBox";

const BrandedSection = async () => {
  const t = await getTranslations("HomePage");

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>{t("BrandedHeading")}</h3>
        <span>{t("BrandedHeadingDescription")}</span>
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
  );
};

export default BrandedSection;
