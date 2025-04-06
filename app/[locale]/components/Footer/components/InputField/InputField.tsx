"use client";

import { useState } from "react";
import styles from "./InputField.module.scss";
import Button from "../../../Button/Button";

interface InputFieldProps {
  sendPlaceholder: string;
  sendLabel: string;
}

const InputField = ({ sendPlaceholder, sendLabel }: InputFieldProps) => {
  const [text, setText] = useState("");

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={sendPlaceholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button title={sendLabel} />
    </div>
  );
};

export default InputField;
