import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import FoodBox from "../components/FoodBox/FoodBox";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

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
          <FoodBox
            image={"/cinannamon.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("Cinannamon")}
          />
          <FoodBox
            image={"/raisinRoll.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("RaisinRoll")}
          />
          <FoodBox
            image={"/kruasani.png"}
            dessert={t("ConfectioneryHeading")}
            title={t("Croissant")}
          />
        </div>
      </div>
    </div>
  );
};

export default Confectionery;
