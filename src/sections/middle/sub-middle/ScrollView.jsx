import { useState } from "react";
import styles from "../Middle.module.css";

const ScrollView = () => {
  const [selectedItem, setSelectedItem] = useState("Overview");
  const data = [
    "Overview",
    "Fundamentals",
    "NewsInsights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <div>
      <div className={styles["scroll-view"]}>
        {data.map((item, index) => (
          <div className={styles["scroll-name"]} key={index}>
            <p className={styles["item-name"]} onClick={() => setSelectedItem(item)}>
              {item}
            </p>
            {selectedItem === item && (
              <div className={styles["line-2"]}></div>
            )}
          </div>
        ))}
      </div>
      <hr className={styles["hr-2"]} />
    </div>
  );
};

export default ScrollView;
