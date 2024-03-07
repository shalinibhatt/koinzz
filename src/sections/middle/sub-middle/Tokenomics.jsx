import styles from "../Middle.module.css";
import DoughNut from "../../../components/middle/DoughNut";
const Tokenomics = () => {
  return (
    <div className={styles["tokenomics-container"]}>
      <p className={styles["team-profile__header-title"]}>Tokenomics</p>
      <p className={styles["team-profile__header-title2"]}>
        Initial Distribution
      </p>
      <div className={styles["doughnut-outer-cont"]}>
        <DoughNut />
      </div>
      <p className={styles["team-profile__header-desc"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Tokenomics;
