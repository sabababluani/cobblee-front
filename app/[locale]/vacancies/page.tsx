import VacanciesBox from "./components/VacanciesBox/VacanciesBox";
import styles from "./page.module.scss";

const Vacancies = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>ვაკანსიები</h1>
        <p>
          ჩვენ ვთვლით, რომ თანამშრომლები ყველაზე მნიშვნელოვანი აქტივია. ვქმნით
          თანაბარ შესაძლებლობებს, სადაც სხვადასხვა კულტურისა და ღირებულებების
          მქონე ადამიანებისთვის მუშაობა საინტერესო და გამოწვევებით სავსეა.
        </p>
      </div>
      <div className={styles.wrapperContainer}>
        <VacanciesBox
          id={"barista"}
          image={"/carbonbar.svg"}
          title={"ბარისტა"}
        />
        <VacanciesBox id={"cook"} image={"/waites.svg"} title={"მზარეული"} />
        <VacanciesBox
          id={"cleaner"}
          image={"/manager.svg"}
          title={"დამლაგებელი"}
        />
      </div>
    </div>
  );
};

export default Vacancies;
