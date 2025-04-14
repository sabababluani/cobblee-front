import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import FoodBox from "../components/FoodBox/FoodBox";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Cobbler = async () => {
  const t = await getTranslations("HomePage");
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            მთავარი
          </Link>
          <Image src={"/arrowright.svg"} alt="arrow" width={24} height={22} />
          <Link href="/cobbler" className={styles.cobbler}>
            ქობლერი
          </Link>
        </div>
        <div className={styles.container}>
          <FoodBox
            image={"/iceCream1.png"}
            dessert={t("Cobbler")}
            title={t("Berries")}
          />
          <FoodBox
            image={"/iceCream2.png"}
            dessert={t("Cobbler")}
            title={t("ApplePearCinnamon")}
          />
          <FoodBox
            image={"/iceCream3.png"}
            dessert={t("Cobbler")}
            title={t("DubaiChocolate")}
          />
          <FoodBox
            image={"/iceCream4.png"}
            dessert={t("Cobbler")}
            title={t("MangoPassionFruit")}
          />
          <FoodBox
            image={"/iceCream5.png"}
            dessert={t("Cobbler")}
            title={t("Kiwi")}
          />
          <FoodBox
            image={"/iceCream6.png"}
            dessert={t("Cobbler")}
            title={t("Strawberry")}
          />
        </div>
      </div>
    </div>
  );
};

export default Cobbler;
