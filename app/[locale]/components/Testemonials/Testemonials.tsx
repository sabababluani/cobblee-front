"use client";

import React from "react";
import TestemonialBox from "./components/TestemonialBox/TestemonialBox";
import styles from "./Testemonials.module.scss";
import { useTranslations } from "next-intl";

const Testemonials = () => {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>{t("TestemonialsHeading")}</h3>
        <p>{t("TestemonialParagraph")}</p>
      </div>
      <div className={styles.testemonialsWrapper}>
        <div className={styles.testemonials}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <TestemonialBox
                image={"/person.png"}
                name={"Dato Avaliani"}
                date={"12 min ago"}
              />
              <TestemonialBox
                image={"/person.png"}
                name={"Dato Avaliani"}
                date={"12 min ago"}
              />
              <TestemonialBox
                image={"/person.png"}
                name={"Dato Avaliani"}
                date={"12 min ago"}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
