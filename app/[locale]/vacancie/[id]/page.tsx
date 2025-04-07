import Image from "next/image";
import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation";

const Vacancie = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/vacancies" className={styles.backContainer}>
          <Image src={"/arrowback.svg"} alt="arrow" width={24} height={24} />
          <span>მიმდინარე ვაკანსიებზე დაბრუნება</span>
        </Link>
        <div className={styles.headingContainer}>
          <h1>ბარმენი</h1>
          <div className={styles.detailsWrapper}>
            <div className={styles.details}>
              <Image
                src={"/locationWhite.svg"}
                alt="location"
                width={24}
                height={24}
              />
              <span>თბილისი, საქართველო</span>
            </div>
            <div className={styles.details}>
              <Image src={"/bag.svg"} alt="location" width={24} height={24} />
              <span>სრული განაკვეთი</span>
            </div>
          </div>
        </div>
        <div className={styles.requireWrapper}>
          <p>კაფე “ქობლერი” აცხადებს ვაკანსიანს ბარმენის პოზიციაზე.</p>
          <div className={styles.requireContainer}>
            <div className={styles.list}>
              <h3>ძირითადი მოთხოვნები:</h3>

              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მინიმუმ 1 წლიანი გამოცდილება ბარის მუშაობაში.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მინიმუმ 1 წლიანი გამოცდილება ბარის მუშაობაში.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მინიმუმ 1 წლიანი გამოცდილება ბარის მუშაობაში.</span>
              </div>
            </div>
          </div>
          <div className={styles.requireContainer}>
            <div>
              <h3>კვალიფიკაცია:</h3>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  ბარმენის პოზიციაზე მუშაობის გამოცდილება ჩაითვლება
                  უპირატესობად;
                </span>
              </div>
            </div>
          </div>
          <div className={styles.requireContainer}>
            <div>
              <h3>უნარები:</h3>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>კრეატიულობა</span>
              </div>
            </div>
          </div>
          <p>
            დაინტერესების შემთხვევაში გთხოვთ გადმოგვიგზავნოთ თქვენი CV ელ.
            ფოსტით შემდეგ მისამართზე info@cobbler.ge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vacancie;
