import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import { getTranslations } from "next-intl/server";
import NewsBox from "./components/NewsBox/NewsBox";

const News = async () => {
  const t = await getTranslations("News");
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          <Link href="/" className={styles.main}>
            {t("Main")}
          </Link>
          <span>{">"}</span>
          <Link href="/news" className={styles.cobbler}>
            {t("News")}
          </Link>
        </div>
        <h1>
          {t("NewsHeading")}{" "}
          <span className={styles.underLine}>{t("Cobbler")}</span>
        </h1>
        <div className={styles.container}>
          <NewsBox
            id={"1"}
            image={"/news1.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"2"}
            image={"/news2.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"3"}
            image={"/news3.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"4"}
            image={"/news4.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"5"}
            image={"/news5.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />{" "}
          <NewsBox
            id={"6"}
            image={"/news1.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"7"}
            image={"/news2.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"8"}
            image={"/news3.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"9"}
            image={"/news4.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"10"}
            image={"/news5.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default News;
