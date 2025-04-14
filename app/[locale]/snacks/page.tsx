import { Link } from "@/i18n/navigation";
import FoodBox from "../components/FoodBox/FoodBox";
import styles from "./page.module.scss";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Snacks = async () => {
  const t = await getTranslations("Snacks");
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            {t("Main")}
          </Link>
          <Image src={"/arrowright.svg"} alt="arrow" width={24} height={22} />

          <Link href="/snacks" className={styles.main}>
            {t("Menu")}
          </Link>
          <Image src={"/arrowright.svg"} alt="arrow" width={24} height={22} />
          <Link href="/snacks" className={styles.cobbler}>
            {t("Snacks")}
          </Link>
        </div>
        <div className={styles.container}>
          <FoodBox
            image={"/burgerJuice.png"}
            dessert={t("SnackHeading")}
            title={t("BagelWithLore")}
          />
          <FoodBox
            image={"/burgerOnly.png"}
            dessert={t("SnackHeading")}
            title={t("BagelWithSalmon")}
          />
          <FoodBox
            image={"/acharuli.png"}
            dessert={t("SnackHeading")}
            title={t("AcharuliKhachapuri")}
          />
          <FoodBox
            image={"/khachapuri.png"}
            dessert={t("SnackHeading")}
            title={t("Khachapuri")}
          />

          <FoodBox
            image={"/toastLore.png"}
            dessert={t("SnackHeading")}
            title={t("CheeseLoreToast")}
          />
          <FoodBox
            image={"/kruasane.png"}
            dessert={t("SnackHeading")}
            title={t("CroissantSandwich")}
          />
          <FoodBox
            image={"/chabataSandwichTomato.png"}
            dessert={t("SnackHeading")}
            title={t("ChabataSandwichWithMozzarella")}
          />
        </div>
      </div>
    </div>
  );
};

export default Snacks;
