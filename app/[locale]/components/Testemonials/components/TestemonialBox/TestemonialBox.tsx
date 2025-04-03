import Image from "next/image";
import styles from "./TestemonialBox.module.scss";
import { TestemonialBoxPropsInterface } from "./interfaces/testemonials-box-props.interface";

const TestemonialBox = (props: TestemonialBoxPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <Image
          src={props.image}
          alt="User profile photo"
          width={64}
          height={64}
        />
        <div className={styles.userDetails}>
          <p>{props.name}</p>
          <span>{props.date}</span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit.
        Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim
        magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis.
        Ornare tincidunt tempus semper
      </p>
      <div className={styles.rating}>
        <Image src={"/fullstar.svg"} alt="star" width={14} height={14} />
        <Image src={"/fullstar.svg"} alt="star" width={14} height={14} />
        <Image src={"/fullstar.svg"} alt="star" width={14} height={14} />
        <Image src={"/fullstar.svg"} alt="star" width={14} height={14} />
        <Image src={"/fullstar.svg"} alt="star" width={14} height={14} />
      </div>
    </div>
  );
};

export default TestemonialBox;
