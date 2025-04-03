import Image from "next/image";
import styles from "./ContactBox.module.scss";
import { ContactBoxPropsInterface } from "./interfaces/contact-box-props.interface";

const ContactBox = (props: ContactBoxPropsInterface) => {
  return (
    <div>
      <div className={styles.contactBox}>
        <Image
          src={props.image}
          alt="Contact"
          width={24}
          height={24}
          className={styles.contactIcon}
        />
      </div>
    </div>
  );
};

export default ContactBox;
