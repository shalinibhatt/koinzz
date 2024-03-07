import styles from "../Middle.module.css";
import {
  faChevronRight,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SentimentCardComponent from "../../../components/middle/SentimentCardComponent";
import { useState, useRef } from "react";
import { Line } from "rc-progress";

const Sentiment = () => {
  const data2 = [
    {
      amount: 76,
      color: "rgba(0, 128, 0, 0.7)",
      name: "Buy",
    },
    {
      amount: 8,
      color: "grey",
      name: "Hold",
    },
    {
      amount: 16,
      color: "rgba(255, 0, 0, 0.7)",
      name: "Sell",
    },
  ];
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const horizontalScroll = useRef(null);
  const scrollLeft = () => {
    if (horizontalScroll.current.scrollLeft <= 200) setShowLeftArrow(false);
    console.log(horizontalScroll.current.scrollLeft);
    horizontalScroll.current.scrollLeft -= 200;
  };
  const scrollRight = () => {
    setShowLeftArrow(true);
    horizontalScroll.current.scrollLeft += 200;
  };
  const data = [
    {
      heading: "Key Events",
      icon_name: "feed",
      backgroundColor: "rgba(0, 0, 255, 0.7)",
    },
    {
      heading: "Analyst Estimates",
      icon_name: "trending_up",
      backgroundColor: "rgba(0, 128, 0, 0.7)",
    },
    {
      heading: "Key Events",
      icon_name: "feed",
      backgroundColor: "rgba(0, 0, 255, 0.7)",
    },
    {
      heading: "Analyst Estimates",
      icon_name: "trending_up",
      backgroundColor: "rgba(0, 128, 0, 0.7)",
    },
  ];
  return (
    <div className={styles["sentiment-container"]}>
      <p className={styles["team-profile__header-title"]}>Sentiment</p>
      <div className={styles["keyevent"]}>
        <p className={styles["sentiment-subheading"]}>
          Key Events <FontAwesomeIcon color="grey" icon={faInfoCircle} />
        </p>
        <div
          ref={horizontalScroll}
          className={styles["sentiment-card-container"]}
        >
          {showLeftArrow && (
            <div onClick={scrollLeft} className={styles["left-arrow"]}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          )}
          {data.map((item, index) => (
            <div key={index}>
              <SentimentCardComponent item={item} />
            </div>
          ))}
          <div onClick={scrollRight} className={styles["right-arrow"]}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <div className={styles["analyticsestimate"]}>
        <p className={styles["sentiment-subheading"]}>
          Analytic Estimates{" "}
          <FontAwesomeIcon color="grey" icon={faInfoCircle} />
        </p>
        <div className={styles["left-right"]}>
          <div className={styles["left"]}>
            <p className={styles["percentage"]}>
              76<span className={styles["percentage-sym"]}>%</span>
            </p>
          </div>
          <div className={styles["right"]}>
            {data2.map((item, index) => (
              <div key={index} className={styles["single-progress"]}>
                <p
                  style={{
                    color: "grey",
                  }}
                  className={styles["progress-name"]}
                >
                  {item.name}
                </p>
                <div className={styles["line-div"]}>
                  <Line
                    prefixCls="rc-progress"
                    percent={item.amount}
                    strokeWidth="1"
                    strokeColor={item.color}
                    trailColor="transparent"
                  />
                  <p
                    style={{
                      position: "absolute",
                      marginLeft: "10px",
                      color: "grey",
                      left: `${
                        item.amount < 10
                          ? `${item.amount * 1.8}%`
                          : item.amount < 20
                          ? `${item.amount + 5}%`
                          : `${item.amount}%`
                      }`,
                      fontSize: "14px",
                    }}
                  >
                    {item.amount}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
