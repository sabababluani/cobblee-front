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
      </div>
      <div className={styles.testemonialsWrapper}>
        <div className={styles.testemonials}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <TestemonialBox
                image={"/ad.png"}
                name={"Advokati Beka Mosashvili"}
                date={"2 month ago"}
                description="Perfect place with perfect tastes and menu"
              />
              <TestemonialBox
                image={"/tam.png"}
                name={"Tamari Jokhadze"}
                date={"2 weeks ago"}
                description="Must visited Cafe in Tbilisi!!! Everything is delicious, here i found my favorite dessert and Coffee💕and also…the environment is incredibly beautiful and peaceful!"
              />
              <TestemonialBox
                image={"/io.png"}
                name={"Юлия Белоцерковская"}
                date={"3 weeks ago"}
                description="Delicious dessert Cobbler! Delicate and airy"
              />
              <TestemonialBox
                image={"/mak.png"}
                name={"Maksim Vozbraniuk"}
                date={"5 month ago"}
                description="Wonderful place with amazing atmosphere! Very tasty dessert and stuff is very friendly and speaks English well."
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
