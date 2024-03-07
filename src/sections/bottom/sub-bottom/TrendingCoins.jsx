/* eslint-disable react/prop-types */
import CarouselItem from "../../../components/bottom/Carousal";
import styles from "../Bottom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
const TrendingCoins = ({ trendingCoinData, title }) => {
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

  return (
    <div className={styles["trending-coins"]}>
      <p className={styles["heading"]}>
        {title === 0 ? "You May Also Like" : "Trending Coins"}
      </p>
      <div className={styles["horizontal-view-with-arrows"]}>
        <div onClick={scrollLeft} className={styles["left-arrow-cont"]}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles["left-arrow"]}
          />
        </div>

        <div className={styles["horizontalScroll"]} ref={horizontalScroll}>
          {trendingCoinData.length > 0 &&
            trendingCoinData.map((item, index) => (
              <div key={index}>
                <CarouselItem item={item} key={index} />
              </div>
            ))}
        </div>
        <div onClick={scrollRight} className={styles["right-arrow-cont"]}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles["right-arrow"]}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
