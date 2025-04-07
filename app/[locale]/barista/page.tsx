import Image from "next/image";
import styles from "./page.module.scss";
import { Link } from "@/i18n/navigation";

const Barista = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/vacancies" className={styles.backContainer}>
          <Image src={"/arrowback.svg"} alt="arrow" width={24} height={24} />
          <span>მიმდინარე ვაკანსიებზე დაბრუნება</span>
        </Link>
        <div className={styles.headingContainer}>
          <h1>ბარისტა</h1>
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
          <p>კაფე “ქობლერი” აცხადებს ვაკანსიანს ბარისტას პოზიციაზე.</p>
          <div className={styles.requireContainer}>
            <div className={styles.list}>
              <h3>ძირითადი მოთხოვნები:</h3>

              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>ასორტიმენტის მახასიათებლების სრულყოფილად ცოდნა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მომხმარებლების კონსულტაცია.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>ყავის სხვადასხვა სახეობების მომზადება.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>ფრეშების სხვადასხვა სახეობების მომზადება.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>მომსახურების მაღალი დონის უზრუნველყოფა..</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>ონლაინ მიღებული შეკვეთის მომზადება.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>სამუშაო სივრცეში მუდმივი წესრიგის კონტროლი.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>
                  ყავის და ფრეშის აპარატის მოვლა ინსტრუქციის შესაბამისად და
                  ჰიგიენური ნოემრბის დაცვით.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.requireContainer}>
            <div>
              <h3>საკვალიფიკაციო მოთხოვნები:</h3>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>სასურველია სამუშაო გამოცდილება შესაბამის პოზიციაზე.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>სავალდებულოა ინგლისური ენის სასაუბრო დონეზე ცოდნა.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>კომუნიკაციის გამორჩეული უნარი.</span>
              </div>
              <div className={styles.require}>
                <div className={styles.dot}></div>
                <span>გამართული მეტყველება.</span>
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
            ფოსტით შემდეგ მისამართზე info@cobbler.ge, ან ტელ: +995 591-044-077
          </p>
        </div>
      </div>
    </div>
  );
};

export default Barista;
