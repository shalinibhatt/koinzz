import Card from "../../../components/middle/Card";
import styles from "../Middle.module.css";
import image from "../../../../assets/phone-man-graph.jpg";
const AboutBitCoin = () => {
  return (
    <div className={styles["tokenomics-container"]}>
      <p className={styles["team-profile__header-title"]}>About Bitcoin</p>
      <p className={styles["team-profile__header-title2"]}>What is Bitcoin?</p>
      <p className={styles["team-profile__header-desc2"]}>
        Bitcoin is the first decentralized cryptocurrency. Nodes in the
        peer-to-peer bitcoin network verify transations through cryptography and
        record them in a public distributed ledger, called a blockchain, without
        central oversight. Consensus between nodes is achieved using a
        computationally intensive proof-of-work system. Bitcoins are created as
        a reward for a process.
      </p>
      <hr className={styles["hr"]} />
      <p className={styles["team-profile__header-title2"]}>
        Lorem ipsum doler sit amet
      </p>
      {[1, 2, 3].map((index) => {
        return (
          <div key={index}>
            <p key={index} className={styles["team-profile__header-desc2"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              blanditiis praesentium nemo. Ad officiis laboriosam minima modi
              perferendis. Nulla ut dolorem laborum qui excepturi reprehenderit
              at praesentium quo obcaecati voluptatibus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Odit blanditiis praesentium
              nemo. Ad officiis laboriosam minima modi perferendis. Nulla ut
              dolorem laborum qui excepturi reprehenderit at praesentium quo
              obcaecati voluptatibus.
            </p>
            <br />
          </div>
        );
      })}
      <hr className={styles["hr"]} />
      <p className={styles["team-profile__header-title"]}>
        Already Holding Bitcoin?
      </p>
      <div className={styles["card-div"]}>
        <Card card="first" title="Calculate your Profits" imgs={image} />
        <Card card="second" title="Calculate your tax liability" imgs={image} />
      </div>
      <hr className={styles["hr"]} />
      <p className={styles["team-profile__header-desc2"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi impedit
        vero veritatis eum quia doloribus, nesciunt quo ab sit amet consectetur
        repellat, unde, obcaecati corporis consequuntur sint repudiandae! Sunt,
        ipsum.
      </p>
    </div>
  );
};

export default AboutBitCoin;
