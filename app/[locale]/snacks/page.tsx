import { Link } from "@/i18n/navigation";
import FoodBox from "../components/FoodBox/FoodBox";
import styles from "./page.module.scss";
import { getTranslations } from "next-intl/server";

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
            image={"/chabataSandwich.png"}
            dessert={t("SnackHeading")}
            title={t("ChabataSandwich")}
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
          <FoodBox
            image={"/toast.png"}
            dessert={t("SnackHeading")}
            title={t("CheeseToast")}
          />
        </div>
      </div>
    </div>
  );
};

export default Snacks;
