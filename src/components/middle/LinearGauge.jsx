import { useState } from "react";
import styles from "./MiddleComponent.module.css";
const LinearGauge = ({ notshowtriangle }) => {
  const [current, setCurrent] = useState("40%");
  return (
    <div className={styles["box"]}>
      <div className={styles["line-1"]}>
        <div className={styles["line"]}></div>
        {!notshowtriangle && (
          <div
            style={{
              left: `calc(${current} - 10px)`,
            }}
            className={styles["current"]}
          ></div>
        )}
      </div>
    </div>
  );
};

export default LinearGauge;
