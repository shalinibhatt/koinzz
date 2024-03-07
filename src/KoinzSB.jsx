import styles from "./KoinzSB.module.css";
import Bottom from "./sections/bottom/Bottom";
import Middle from "./sections/middle/Middle";
import Top from "./sections/top/Top";
import Aside from "./sections/Aside";
import NavBar from "./sections/top/sub-top/NavBar";
const KoinzSB = () => {
  return (
    <div className={styles["main-container"]}>
      <NavBar />
      <div className={styles["inner-container"]}>
        <div className={styles["top-middle-cont"]}>
          <Top />
          <Middle />
        </div>
        <Aside />
      </div>
      <div className={styles["bottom"]}>
        <Bottom />
      </div>
    </div>
  );
};
export default KoinzSB;
