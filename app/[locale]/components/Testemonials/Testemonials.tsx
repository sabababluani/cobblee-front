"use client";

import { useRef } from "react";
import TestemonialBox from "./components/TestemonialBox/TestemonialBox";
import styles from "./Testemonials.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Testemonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("HomePage");

  const scrollTestimonials = (direction: "left" | "right") => {
    if (testimonialsRef.current) {
      const scrollAmount = 300;
      testimonialsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>{t("TestemonialsHeading")}</h3>
        <p>{t("TestemonialParagraph")}</p>
      </div>
      <div className={styles.testemonialSection}>
        <Image
          src={"/leftArrow.svg"}
          alt="arrow"
          width={80}
          height={80}
          onClick={() => scrollTestimonials("left")}
          className={styles.leftArrow}
        />

        <div className={styles.testemonials} ref={testimonialsRef}>
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
        </div>

        <Image
          src={"/rightArrow.svg"}
          alt="arrow"
          width={80}
          height={80}
          onClick={() => scrollTestimonials("right")}
          className={styles.rightArrow}
        />
      </div>
    </div>
  );
};

export default Testemonials;
