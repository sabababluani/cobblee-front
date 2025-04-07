import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import styles from "./BurgerMenu.module.scss";
import { useTranslations } from "next-intl";
import {
  isAboutUsPage,
  isCarrierPage,
  isCobblerPage,
  isConfectioneryPage,
  isMainPage,
  isNewsPage,
  isSnacksPage,
} from "../../utils/pathUtils";
import Languages from "../Languages/Languages";

const BurgerMenu = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className={`${styles.menuLinks} ${
        visible ? styles.menuLinksVisible : ""
      }`}
    >
      <Link
        href="/"
        className={isMainPage(pathname) ? styles.bold : ""}
        onClick={handleClick}
      >
        {t("Main")}
      </Link>
      <Link
        href="/cobbler"
        className={isCobblerPage(pathname) ? styles.bold : ""}
        onClick={handleClick}
      >
        {t("Cobbler")}
      </Link>
      <Link
        href="/snacks"
        className={isSnacksPage(pathname) ? styles.bold : ""}
        onClick={handleClick}
      >
        {t("Snacks")}
      </Link>
      <Link
        href="/confectionery"
        className={isConfectioneryPage(pathname) ? styles.bold : ""}
        onClick={handleClick}
      >
        {t("Confectionery")}
      </Link>
      <Link
        href="/news"
        className={isNewsPage(pathname) ? styles.bold : ""}
        onClick={handleClick}
      >
        {t("News")}
      </Link>
      <Link
        href="/vacancies"
        className={isCarrierPage(pathname) ? styles.bold : ""}
        onClick={handleClick}
      >
        {t("Carrier")}
      </Link>
      <Link href="#contact" onClick={handleClick}>
        {t("Contact")}
      </Link>
      <Link
        href="/aboutus"
        className={isAboutUsPage(pathname) ? styles.bold : ""}
        onClick={handleClick}
      >
        {t("AboutUs")}
      </Link>

      <Languages />
    </div>
  );
};

export default BurgerMenu;
