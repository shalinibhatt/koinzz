/* eslint-disable react/prop-types */
import styles from "./Carousal.module.css";
const CarouselItem = ({ item }) => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["up-up-view"]}>
        <div className={styles["up-view"]}>
          <div className={styles["logo"]}>
            <img
              src={item.item.large}
              alt="logo-png"
              className={styles["logo-image"]}
            />
          </div>
          <div className={styles["name"]}>{item.item.symbol}</div>
          <div className={styles["inc-dec"]}>
            {item.item.data?.price_change_percentage_24h.aed < 0 ? (
              <p className={styles["dec"]}>
                {item.item.data.price_change_percentage_24h.aed.toFixed(2)}%
              </p>
            ) : (
              <p className={styles["inc"]}>
                +{item.item.data.price_change_percentage_24h.aed.toFixed(2)}%
              </p>
            )}
          </div>
        </div>
        <p className={styles["price"]}>{item.item.data.price}</p>
      </div>

      <div className={styles["graph-view"]}>
        <img
          src={item.item.data.sparkline}
          alt="graph-png"
          className={styles["graph-image"]}
        />
      </div>
    </div>
  );
};

export default CarouselItem;
