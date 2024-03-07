import TradingViewWidget from "./sub-top/TradingViewWidget";
import "../../App.css";
const Top = () => {
  return (
      <div
        style={{
          height: "400px",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <TradingViewWidget />
      </div>
  );
};

export default Top;
