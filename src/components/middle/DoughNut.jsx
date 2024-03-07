import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./MiddleComponent.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughNut = () => {
  return (
    <Doughnut
      className={styles["dough-nut-cont"]}
      data={{
        labels: ["Crowdsale investors : 80%", "Foundation : 20%"],
        datasets: [
          {
            label: "Tokenomics",
            data: [80, 20],
            backgroundColor: ["rgba(0, 100, 255, 1)", "rgba(255, 150, 1, 1)"],
            borderWidth: 0,
          },
        ],
      }}
      height={200}
      width={400}
      options={{
        cutout: "70%",
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              padding: 20,
              usePointStyle: true,
              color: "black",
              font: {
                size: 12,
              },
            },
          },
        },
      }}
    />
  );
};

export default DoughNut;
