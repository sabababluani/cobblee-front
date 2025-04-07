"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import { Link } from "@/i18n/navigation";
import Languages from "./components/Languages/Languages";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

const Header = () => {
  const t = useTranslations("Header");

  const pathname = usePathname();

  const isMainPage = pathname === "/en" || pathname === "/ka";

  const isCobblerPage =
    pathname === "/en/cobbler" || pathname === "/ka/cobbler";

  const isSnacksPage = pathname === "/en/snacks" || pathname === "/ka/snacks";

  const isConfectioneryPage =
    pathname === "/en/confectionery" || pathname === "/ka/confectionery";

  const isNewsPage = pathname === "/en/news" || pathname === "/ka/news";

  const isAboutUsPage =
    pathname === "/en/aboutus" || pathname === "/ka/aboutus";

  const isCarrierPage =
    pathname === "/en/vacancies" || pathname === "/ka/vacancies";

  const [isBurgerVisable, setIsBurgerVisable] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsBurgerVisable(false);
      }
    };

    if (isBurgerVisable) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBurgerVisable]);
  return (
    <>
      <header className={styles.wrapper}>
        <Link href="/">
          <Image
            src={"/cobblerLogo.svg"}
            width={88}
            height={48}
            alt="Cobbler Logo"
          />
        </Link>

        <div className={styles.menuLinks}>
          <Link href="/" className={isMainPage ? styles.bold : ""}>
            {t("Main")}
          </Link>
          <Link href="/cobbler" className={isCobblerPage ? styles.bold : ""}>
            {t("Cobbler")}
          </Link>

          <div className={styles.subMenuWrapper}>
            <span>
              {t("Menu")}{" "}
              <Image src={"/arrow.svg"} alt="arrow" width={9} height={5} />
            </span>
            <div className={styles.subMenu}>
              <Link href="/snacks" className={isSnacksPage ? styles.bold : ""}>
                {t("Snacks")}
              </Link>
              <Link
                href="/confectionery"
                className={isConfectioneryPage ? styles.bold : ""}
              >
                {t("Confectionery")}
              </Link>
            </div>
          </div>
          <Link href="/news" className={isNewsPage ? styles.bold : ""}>
            {t("News")}
          </Link>
          <Link href="/vacancies" className={isCarrierPage ? styles.bold : ""}>
            {t("Carrier")}
          </Link>
          <Link href="#contact">{t("Contact")}</Link>
          <Link href="/aboutus" className={isAboutUsPage ? styles.bold : ""}>
            {t("AboutUs")}
          </Link>
        </div>
        <div className={styles.burgerWrapper}>
          <div ref={menuRef}>
            <div
              className={styles.burger}
              onClick={(e) => {
                e.stopPropagation();
                setIsBurgerVisable(!isBurgerVisable);
              }}
            >
              <Image src={"/burger.svg"} alt="Burger" width={48} height={48} />
            </div>
            {isBurgerVisable && (
              <BurgerMenu
                visible={isBurgerVisable}
                onClose={() => setIsBurgerVisable(false)}
              />
            )}
          </div>
          <div className={styles.languages}>
            <Languages />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
