import styles from "./MiddleComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Card = ({ card, title, imgs }) => {
  return (
    <div
      className={
        card === "first" ? styles["card-first"] : styles["card-second"]
      }
    >
      <img className={styles["card-img"]} src={imgs} alt="card" />
      <div className={styles["button-title"]}>
        <p>{title}</p>
        <button>
          Check Now &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};
export default Card;
