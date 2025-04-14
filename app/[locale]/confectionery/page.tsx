import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import FoodBox from "../components/FoodBox/FoodBox";
import { getTranslations } from "next-intl/server";
<<<<<<< HEAD
import Image from "next/image";
=======
import { confectioneryItemsData } from "./utils/confectionery-items";
>>>>>>> 2ea90e5945102438a2725c1cdb51a0204158b4c7

const Confectionery = async () => {
  const t = await getTranslations("Confectionery");

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            {t("Main")}
          </Link>
          <Image src={"/arrowright.svg"} alt="arrow" width={24} height={22} />
          <Link href="/confectionery" className={styles.main}>
            {t("Menu")}
          </Link>
          <Image src={"/arrowright.svg"} alt="arrow" width={24} height={22} />
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
