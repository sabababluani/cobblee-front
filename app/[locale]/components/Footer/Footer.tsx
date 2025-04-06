import Image from "next/image";
import styles from "./Footer.module.scss";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import InputField from "./components/InputField/InputField";

const Footer = async () => {
  const t = await getTranslations("Header");
  return (
    <footer className={styles.wrapper}>
      <div className={styles.wrapperContainer}>
        <div className={styles.container}>
          <Image
            src={"/cobblerLogo.svg"}
            alt="Cobbler Logo"
            width={136}
            height={72}
          />
          <div className={styles.contact}>
            <p>{t("LeaveComment")}</p>
            <span>{t("Waiting")}</span>
          </div>
          <InputField
            sendPlaceholder={`${t("SendMessage")}...`}
            sendLabel={t("Send")}
          />
        </div>
        <div className={styles.socials}>
          <p>{t("Navigation")}</p>
          <Link href={"#"}>{t("Main")}</Link>
          <Link href={"#"}>{t("AboutUs")}</Link>
          <Link href={"#"}>{t("Cobbler")}</Link>
          <Link href={"#"}>{t("News")}</Link>
          <Link href={"#"}>{t("Carrier")}</Link>
          <Link href={"#"}>{t("Contact")}</Link>
        </div>
        <div className={styles.socials}>
          <p>{t("Contact")}</p>
          <span>Kote Afxadzis 34</span>
          <span>+995 591-044-077</span>
          <span>info@cobbler.ge</span>
        </div>
        <div className={styles.socials}>
          <p>{t("Menu")}</p>
          <Link href={"#"}>{t("Cobbler")}</Link>
          <Link href={"#"}>{t("Snacks")}</Link>
          <Link href={"#"}>{t("Confectionery")}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
