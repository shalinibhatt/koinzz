import styles from "./MiddleComponent.module.css";
const TeamProfileComponent = ({ id, name, title, desc, image }) => {
  return (
    <div key={id} className={styles["team-profile__card"]}>
      <div className={styles["img-title-desg"]}>
        <img className={styles["imgs"]} src={image} alt="img" />
        <p className={styles["team-profile__card-name"]}>{name}</p>
        <p className={styles["team-profile__card-title"]}>{title}</p>
      </div>
      <p className={styles["team-profile__card-desc"]}>{desc}</p>
    </div>
  );
};

export default TeamProfileComponent;
