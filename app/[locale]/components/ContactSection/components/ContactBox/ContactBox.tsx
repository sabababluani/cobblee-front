import Image from "next/image";
import styles from "./ContactBox.module.scss";
import { ContactBoxPropsInterface } from "./interfaces/contact-box-props.interface";

const ContactBox = (props: ContactBoxPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactBox}>
        <Image
          src={props.image}
          alt="Contact"
          width={24}
          height={24}
          className={styles.contactIcon}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.heading}>{props.heading}</span>
        <p>{props.content}</p>
      </div>
      <span className={styles.address}>{props.address}</span>
    </div>
  );
};

export default ContactBox;
