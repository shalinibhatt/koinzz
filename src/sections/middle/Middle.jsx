import styles from "./Middle.module.css";
import AboutBitCoin from "./sub-middle/AboutBitCoin";
import Performance from "./sub-middle/Performance";
import ScrollView from "./sub-middle/ScrollView";
import Sentiment from "./sub-middle/Sentiment";
import TeamProfile from "./sub-middle/TeamProfile";
import Tokenomics from "./sub-middle/Tokenomics";
const Middle = () => {
  return (
    <div className={styles["middle"]}>
      <ScrollView />
      <Performance />
      <Sentiment />
      <AboutBitCoin />
      <Tokenomics />
      <TeamProfile />
    </div>
  );
};

export default Middle;
