"use client";

import styles from "./Button.module.scss";
import { ButtonPropsInterface } from "./interfaces/buttton-props.interface";

const Button = (props: ButtonPropsInterface) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
