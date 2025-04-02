import Image from "next/image";
import styles from "./Header.module.scss";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Languages from "./components/Languages/Languages";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className={styles.wrapper}>
      <Image
        src={"/cobblerLogo.svg"}
        width={88}
        height={48}
        alt="Cobbler Logo"
      />

      <div className={styles.menuLinks}>
        <Link href="/">{t("Main")}</Link>
        <Link href="/">{t("Cobbler")}</Link>

        <div className={styles.subMenuWrapper}>
          <Link href="/">
            {t("Menu")}{" "}
            <Image src={"/arrow.svg"} alt="arrow" width={9} height={5} />
          </Link>
          <div className={styles.subMenu}>
            <Link href="/">{t("Snacks")} </Link>
            <Link href="/">{t("Confectionery")}</Link>
          </div>
        </div>
        <Link href="/">{t("News")}</Link>
        <Link href="/">{t("Carrier")}</Link>
        <Link href="/">{t("Contact")}</Link>
        <Link href="/">{t("AboutUs")}</Link>
      </div>
      <div className={styles.burgerWrapper}>
        <div className={styles.burger}>
          <Image src={"/burger.svg"} alt="Burger" width={48} height={48} />
        </div>
        <Languages />
      </div>
    </header>
  );
};

export default Header;
