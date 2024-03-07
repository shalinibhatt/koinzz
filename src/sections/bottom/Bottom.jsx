import { useEffect, useState } from "react";
import styles from "./Bottom.module.css";
import TrendingCoins from "./sub-bottom/TrendingCoins";
const Bottom = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const apicall = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-Tdk1tuGcDSkuio2LMaX8AicH"
      );
      const data = await response.json();
      setTrendingCoins(data.coins);
    };
    apicall();
  }, []);
  return (
    <div className={styles["main-container"]}>
      <div className={styles["bottom"]}>
        {[0, 1].map((index) => {
          return (
            <TrendingCoins
              key={index}
              title={index}
              trendingCoinData={trendingCoins}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bottom;
