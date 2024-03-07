import LinearGauge from "../../../components/middle/LinearGauge";
import styles from "../Middle.module.css";
const Performance = () => {
  const data = [
    {
      today_low: "46,930.22",
      today_high: "49,343.83",
      mark: "48,637.83",
      low: "52W Low",
      low_num: "16,930.22",
      high: "52W High",
      high_num: "49,743.83",
    },
  ];

  return (
    <div className={styles["tokenomics-container"]}>
      <p className={styles["team-profile__header-title"]}>Performance</p>
      <div className={styles["top-per"]}>
        <div className={styles["left-per"]}>
          <p>Today's Low</p>
          <p>{data[0].today_low}</p>
        </div>
        <div className={styles["middle-per"]}>
          <LinearGauge />
        </div>
        <div className={styles["right-per"]}>
          <p>Today's High</p>
          <p>{data[0].today_high}</p>
        </div>
      </div>
      <div className={styles["top-per"]}>
        <div className={styles["left-per"]}>
          <p>52W Low</p>
          <p>{data[0].today_low}</p>
        </div>
        <div className={styles["middle-per"]}>
          <LinearGauge notshowtriangle={true} />
        </div>
        <div className={styles["right-per"]}>
          <p>52W High</p>
          <p>{data[0].today_high}</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
