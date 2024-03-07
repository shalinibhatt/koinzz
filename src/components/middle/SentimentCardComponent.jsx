import styles from "./MiddleComponent.module.css";
const SentimentCardComponent = ({ item }) => {
  return (
    <div className={styles["sentiment-card"]}>
      <div
        style={{
          backgroundColor: item?.backgroundColor,
          borderRadius: "50%",
          width: "max-content",
          height: "max-content",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "2rem",
            padding: "0.5rem",
          }}
          class="material-symbols-outlined"
        >
          {item?.icon_name}
        </span>
      </div>
      <div>
        <p className={styles["team-profile__card-name"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          deleniti temporibus nemo. Dolorem error rem, sit voluptatum eum
          ratione expedita non. Cumque perferendis veniam eum totam aperiam
          beatae tenetur animi
        </p>
        <p className={styles["team-profile__card-desc"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          commodi repudiandae beatae aperiam, cupiditate quia veniam eius ea,
          sunt doloremque amet asperiores obcaecati tenetur rerum. Aliquam dicta
          et eius error?
        </p>
      </div>
    </div>
  );
};

export default SentimentCardComponent;
