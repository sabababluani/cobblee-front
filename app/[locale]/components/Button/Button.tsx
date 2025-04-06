"use client";

import { useEffect, useState } from "react";
import styles from "./Button.module.scss";
import { ButtonPropsInterface } from "./interfaces/buttton-props.interface";
import { useLocale } from "next-intl";

const Button = (props: ButtonPropsInterface) => {
  const locale = useLocale();

  const [fontClass, setFontClass] = useState<string>("");

  useEffect(() => {
    if (locale === "ka") {
      setFontClass("font-bpg");
    } else {
      setFontClass("font-david");
    }
  }, [locale]);
  return (
    <button className={`${styles.button} ${fontClass}`} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
