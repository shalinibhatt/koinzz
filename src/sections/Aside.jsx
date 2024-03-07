import {
  faArrowUp,
  faArrowUpShortWide,
  faChevronRight,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Aside = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-Tdk1tuGcDSkuio2LMaX8AicH"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.coins);
      });
  }, []);

  return (
    <div
      style={{
        flexDirection: "column",
        margin: "0 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "blue",
          flexDirection: "column",
          flex: "1",
          height: "400px",
          fontFamily: "sans-serif",
          alignItems: "center",
          padding: "20px",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            alignItems: "center",
          }}
        >
          Get Started with KoinX for FREE
        </p>
        <p
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: "normal",
            fontFamily: "sans-serif",
            alignItems: "baseline",
            lineHeight: "1.5",
            letterSpacing: "0.5px",
            justifyContent: "center",
          }}
        >
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reportS.
        </p>
        <img
          style={{
            width: "100%",
            height: "100px",
            borderRadius: "10px",
            margin: "20px 0",
            objectFit: "contain",
          }}
          src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2016/11/Point-of-View.jpg"
        />
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            position: "absolute",
            bottom: 20,
          }}
        >
          Get Started for FREE
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          backgroundColor: "white",
          height: "300px",
          borderRadius: "10px",
          padding: "20px",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Trending Coins (24h)
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {data.slice(0, 3).map((coin, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                gap: "20px",
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
                src={coin.item.small}
              />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  fontFamily: "sans-serif",
                  color: "black",
                  alignItems: "center",
                }}
              >
                {coin.item.name}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,128,0,0.2)",
                  color: "green",
                  fontWeight: "bold",
                  padding: "2px",
                  borderRadius: "3px",
                }}
              >
                <FontAwesomeIcon color="green" icon={faArrowUp} />
                {coin?.item?.data?.price_change_percentage_24h.aed?.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aside;
