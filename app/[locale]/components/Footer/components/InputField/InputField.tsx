"use client";

import { useState } from "react";
import styles from "./InputField.module.scss";
import Button from "../../../Button/Button";
import { useTranslations } from "next-intl";

const InputField = () => {
  const [text, setText] = useState("");
  const t = useTranslations("Header");

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={`${t("SendMessage")}...`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button title={t("Send")} />
    </div>
  );
};

export default InputField;
