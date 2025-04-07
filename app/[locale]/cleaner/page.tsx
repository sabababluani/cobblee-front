import Image from "next/image";
import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation";

const Cleaner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/vacancies" className={styles.backContainer}>
          <Image src={"/arrowback.svg"} alt="arrow" width={24} height={24} />
          <span>მიმდინარე ვაკანსიებზე დაბრუნება</span>
        </Link>
        <div className={styles.headingContainer}>
          <h1>მზარეული</h1>
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
          <p>კაფე “ქობლერი” აცხადებს ვაკანსიანს მზარეულის პოზიციაზე.</p>
          <div className={styles.requireContainer}>
            <div className={styles.list}>
              <h3>ძირითადი მოთხოვნები:</h3>

              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>ობიექტის დალაგება/მოწესრიგება დღის მანძილზე.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მაგიდების სისუფთავის უზრუნველყოფა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>ჭურჭლის გარეცხვა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  სამუშაოს დასრულების შემდეგ, დასუფთავებისთვის საჭირო ინვენტარის
                  განკუთვნილ ადგილზე მოთავსება.
                </span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  სარეცხი და საწმენდი საშუალებების მოხმარების წესების და Haccp
                  სტანდარტების ცოდნა.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.requireContainer}>
            <div>
              <h3>საკვალიფიკაციო მოთხოვნები:</h3>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>გუნდურად მუშაობის უნარი.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მოწესრიგებულობა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>პასუხისმგებლობის მაღალი გრძნობა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>პუნქტუალობა.</span>
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

export default Cleaner;
