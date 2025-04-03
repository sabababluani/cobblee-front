import Image from "next/image";
import styles from "./FoodBox.module.scss";
import { FoodBoxPropsInterface } from "./interfaces/food-box-props.interface";

const FoodBox = (props: FoodBoxPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <Image src={props.image} alt="Food photo" width={488} height={300} />
      <div className={styles.dessert}>
        <span>{props.dessert}</span>
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export default FoodBox;
