"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import styles from "./Languages.module.scss";
import Image from "next/image";

const Languages = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onBritainClick = () => {
    router.push(pathname, { locale: "en" });
  };

  const onGeorgianClick = () => {
    router.push(pathname, { locale: "ka" });
  };

  return (
    <div className={styles.flagsWrapper}>
      <Image
        src={"/britain.svg"}
        width={40}
        height={40}
        alt="Britain Flag"
        onClick={onBritainClick}
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
