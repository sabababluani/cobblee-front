import Image from "next/image";
import styles from "./VacanciesBox.module.scss";
import { VacanciesBoxPropsInterface } from "./interfaces/vacancies-box-props.interface";
import { Link } from "@/i18n/navigation";

const VacanciesBox = (props: VacanciesBoxPropsInterface) => {


  return (
    <Link href={`/vacancie/${props.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={props.image}
              alt="Vacancies logo"
              width={32}
              height={32}
            />
          </div>
          <div className={styles.texts}>
            <p>{props.title}</p>
            <span>Cafe</span>
          </div>
        </div>
        <Image src={"/link.svg"} alt="link" width={24} height={24} />
      </div>
    </Link>
  );
};

export default VacanciesBox;
