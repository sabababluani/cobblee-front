import Image from "next/image";
import styles from "./ContentBox.module.scss";
import { ContentBoxPropsInterface } from "./interfaces/content-box-props.interface";

const ContentBox = (props: ContentBoxPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <Image src={props.image} alt="Photo" width={48} height={48} />
      <p>{props.content}</p>
    </div>
  );
};

export default ContentBox;
