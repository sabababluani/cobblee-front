"use client";

import { Link } from "@/i18n/navigation";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";
import { newsData } from "./utils/dynamic-data";
import NewsBox from "../../news/components/NewsBox/NewsBox";

const DetailedNews = () => {
  const t = useTranslations("News");
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === id);

  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headerContaner}>
            <div className={styles.title}>
              <Link href="/" className={styles.main}>
                {t("Main")}
              </Link>
              <span>{">"}</span>
              <span className={styles.cobbler}>{t("News")}</span>
            </div>
            <h1>{t("Title1")}</h1>
          </div>
          <span>{newsItem?.description}</span>
          <Image
            src={newsItem?.image || ""}
            alt="News Banner"
            width={1000}
            height={595}
          />
        </div>
        <div className={styles.newsContainer}>
          <div className={styles.newsContainerHeader}>
            <h2>რეკომენდირებული</h2>
          </div>
          <div className={styles.recommendedNews}>
            <Image
              src={"/news3.png"}
              alt="News Banner"
              width={114}
              height={76}
            />
            <div className={styles.recommendedNewsText}>
              <p>Cobbler - ერთი წლის გახდა</p>
              <span>
                Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის
                განმავლობაში უამრავი გემ...
              </span>
            </div>
          </div>
          <div className={styles.recommendedNews}>
            <Image
              src={"/news3.png"}
              alt="News Banner"
              width={114}
              height={76}
            />
            <div className={styles.recommendedNewsText}>
              <p>Cobbler - ერთი წლის გახდა</p>
              <span>
                Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის
                განმავლობაში უამრავი გემ...
              </span>
            </div>
          </div>
          <div className={styles.recommendedNews}>
            <Image
              src={"/news3.png"}
              alt="News Banner"
              width={114}
              height={76}
            />
            <div className={styles.recommendedNewsText}>
              <p>Cobbler - ერთი წლის გახდა</p>
              <span>
                Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის
                განმავლობაში უამრავი გემ...
              </span>
            </div>
          </div>
        </div>
        <div className={styles.newsWrapper}>
          <div className={styles.newsWrapperHeader}>
            <h2>რეკომენდირებული</h2>
          </div>
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
            image={"/news1.png"}
            date={"28 მარტი 2025"}
            title={"Cobbler - ერთი წლის გახდა"}
            description={
              "Cobbler ერთი წლის გახდა - დრო გავიდა და ამ ერთი წლის განმავლობაში უამრავი გემრიელი მომენტი შევქმენით ჩვენს სტუმრებთან ერთად..."
            }
          />
          <NewsBox
            id={"3"}
            image={"/news1.png"}
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

export default DetailedNews;
