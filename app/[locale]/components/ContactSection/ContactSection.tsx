import { getTranslations } from "next-intl/server";
import ContactBox from "./components/ContactBox/ContactBox";
import styles from "./ContactSection.module.scss";

const ContactSection = async () => {
  const t = await getTranslations("HomePage");
  return (
    <div className={styles.wrapper}>
      <h3>{t("ContactHeading")}</h3>
      <div className={styles.contactSection}>
        <ContactBox
          image={"/mail.svg"}
          heading={t("Email")}
          content={t("QuestionsText")}
          address={"info@cobbler.ge"}
        />
        <ContactBox
          image={"/location.svg"}
          heading={t("Location")}
          content={t("WaitingInCafe")}
          address={"Kote Afxadzis 34"}
        />
        <ContactBox
          image={"/phone.svg"}
          heading={t("ContactInfo")}
          content={t("QuestionsText")}
          address={"+995 591-044-077"}
        />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.3184340813027!2d44.80402277657753!3d41.6920609770409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d007f309efd%3A0x188396fb83025891!2sCobbler%20Caf%C3%A9!5e0!3m2!1sen!2sge!4v1743709759937!5m2!1sen!2sge"
        className={styles.map}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactSection;
