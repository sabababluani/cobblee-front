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
        <VacanciesBox id={"1"} image={"/carbonbar.svg"} title={"ბარმენი"} />
        <VacanciesBox id={"2"} image={"/waites.svg"} title={"მიმტანი"} />
        <VacanciesBox id={"3"} image={"/manager.svg"} title={"მენეჯერი"} />
      </div>
    </div>
  );
};

export default Vacancies;
