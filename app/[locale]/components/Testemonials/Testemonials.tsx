"use client";

import React from "react";
import TestemonialBox from "./components/TestemonialBox/TestemonialBox";
import styles from "./Testemonials.module.scss";
import { useTranslations } from "next-intl";
import { testimonialsData } from "./utils/testemonials.data";

const Testemonials = () => {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>{t("TestemonialsHeading")}</h3>
      </div>
      <div className={styles.testemonialsWrapper}>
        <div className={styles.testemonials}>
          {testimonialsData.map((testimonial, index) => (
            <TestemonialBox
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              date={testimonial.date}
              description={testimonial.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
