"use client";

import { useEffect, useState } from "react";
import styles from "./FirstBackground.module.scss";
import Image from "next/image";

const BlurBackground = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const firstVisit = sessionStorage.getItem("firstVisit");

    if (!firstVisit) {
      setIsFirstVisit(true);
      sessionStorage.setItem("firstVisit", "true");

      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setIsFirstVisit(false);
        document.body.style.overflow = "";
      }, 6000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, []);

  return (
    <>
      {isFirstVisit && (
        <div className={styles.blurBackground}>
          <div className={styles.content}>
            <h1>Cobbler - It&apos;s been a year already...</h1>
            <Image src={"/2.gif"} alt="gif" width={305} height={315} />
          </div>
        </div>
      )}
    </>
  );
};

export default BlurBackground;
