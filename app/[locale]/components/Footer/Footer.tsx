import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div>
        <Image
          src={"/cobblerLogo.svg"}
          alt="Cobbler Logo"
          width={136}
          height={72}
        />
        <p>
          Enjoy Hassle Free Transactions Worldwide With Our Visionary Unique
          Banking Products
        </p>
        <span>Support@cobbler.ge</span>
        <span>+995 599 222 222</span>
      </div>
    </footer>
  );
};

export default Footer;
