"use client";

import { useRouter } from "next/navigation";
import styles from "./Languages.module.scss";
import Image from "next/image";

const Languages = () => {
  const router = useRouter();

  const onBritainCLick = () => {
    router.push("/en");
  };
  const onGeorgianClick = () => {
    router.push("/ka");
  };

  return (
    <div className={styles.flagsWrapper}>
      <Image
        src={"/britain.svg"}
        width={40}
        height={40}
        alt="Britain Flag"
        onClick={onBritainCLick}
      />
      <Image
        src={"/georgian.svg"}
        width={40}
        height={40}
        alt="Georgian Flag"
        onClick={onGeorgianClick}
      />
    </div>
  );
};

export default Languages;
