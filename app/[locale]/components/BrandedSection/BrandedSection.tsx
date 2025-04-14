import { getTranslations } from "next-intl/server";
import styles from "./BrandedSection.module.scss";
import FoodBox from "../FoodBox/FoodBox";
import { brandedItemsData } from "./utils/branded-items";

const BrandedSection = async () => {
  const t = await getTranslations("HomePage");

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>{t("BrandedHeading")}</h3>
        <span>{t("BrandedHeadingDescription")}</span>
      </div>
      <div className={styles.container}>
        {brandedItemsData.map((item, index) => (
          <FoodBox
            key={index}
            image={item.image}
            dessert={t("Cobbler")}
            title={t(item.titleKey)}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandedSection;
