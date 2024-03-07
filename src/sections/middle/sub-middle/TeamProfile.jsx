import styles from "../Middle.module.css";
import prfilepic from "../../../../assets/johnsmith.jpeg";
import TeamProfileComponent from "../../../components/middle/TeamProfileComponent";
const TeamProfile = () => {
  const data = [
    {
      name: "John Smith",
      title: "Designation here",
      image: prfilepic,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Smith",
      title: "Designation here",
      image: prfilepic,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Smith",
      title: "Designation here",
      image: prfilepic,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className={styles["team-profile"]}>
      <div className={styles["team-profile__header"]}>
        <p className={styles["team-profile__header-title"]}>Our Team</p>
        <p className={styles["team-profile__header-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {data.map((item, index) => (
        <TeamProfileComponent
          key={index}
          name={item.name}
          title={item.title}
          desc={item.desc}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default TeamProfile;
