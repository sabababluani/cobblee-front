import Image from "next/image";
import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation";

const Cook = () => {
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
                <span>
                  ყველა შეკვეთის ზედმიწევნით შესრულება, რეცეპტების შესაბამისად.
                </span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  ახალი რეცეპტების შექმნაში აქტიური მონაწილეობის მიღება.
                </span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  კერძის მოსამზადებლად ყველა საჭირო ინგრედიენტის მომარაგება.
                </span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  ინვენტარის და ინსტრუმენტების მოხმარების წესების დაცვა.
                </span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მომსახურების მაღალი დონის უზრუნველყოფა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  სამზარეულოს შეუფერხებლად მუშაობის უზრუნველყოფა, სამზარეულოს
                  სხვა თანამშრომლებთან ერთად.
                </span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>სისუფთავის დაცვა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>HACCP-ის წესების დაცვა და ყოველდღიური კონტროლი.</span>
              </div>
            </div>
          </div>
          <div className={styles.requireContainer}>
            <div>
              <h3>საკვალიფიკაციო მოთხოვნები:</h3>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მსგავს პოზიციაზე მუშაობის გამოცდილება.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>სავალდებულოა ინგლისური ენის სასაუბრო დონეზე ცოდნა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>კომუნიკაბელურობა.</span>
              </div>
            </div>
          </div>
          <div className={styles.requireContainer}>
            <div>
              <h3>უნარები:</h3>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მოწესრიგებული.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>ენერგიული.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>გუნდური მუშაობის უნარი.</span>
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

export default Cook;
