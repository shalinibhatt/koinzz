import { useState } from "react";
import styles from "../Top.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["left"]}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            alignItems: "center",
            justifyContent: "center",
            color: "blue",
          }}
        >
          Koin
          <span
            style={{
              color: "#FFD700",
            }}
          >
            X
          </span>
          <sup
            style={{
              color: "black",
            }}
          >
            TM
          </sup>
        </p>
      </div>
      {window.innerWidth < 600 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={styles["hamburger"]}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon color="black" icon={faBars} />
        </div>
      ) : (
        <div className={styles["right"]}>
          <ul className={styles["ul"]}>
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Exchanges</li>
            <li>Resource Center</li>
          </ul>
          <button>Get Started</button>
        </div>
      )}
      {menuOpen && (
        <div className={styles["mobile-menu"]}>
          <ul className={styles["ul-mobile"]}>
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Exchanges</li>
            <li>Resource Center</li>
          </ul>
          <button>Get Started</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
