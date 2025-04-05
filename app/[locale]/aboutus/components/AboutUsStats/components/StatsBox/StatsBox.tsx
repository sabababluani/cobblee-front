import { StatsBoxPropsInterface } from "./interfaces/stats-box-props.interface";
import styles from "./StatsBox.module.scss";

const StatsBox = (props: StatsBoxPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <span>{props.quantity}</span>
      <p>{props.label}</p>
    </div>
  );
};

export default StatsBox;
