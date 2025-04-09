import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import FoodBox from "../components/FoodBox/FoodBox";
import { getTranslations } from "next-intl/server";
import { cobblerItems } from "./utils/cobbler-items"; 

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
          {cobblerItems.map((item, index) => (
            <FoodBox
              key={index}
              image={item.image}
              dessert={t("Cobbler")}
              title={t(item.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cobbler;
