const Line = ({ strokeColor, percent }) => {
  return (
    <div
      style={{
        width: "80%",
        height: "5px",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: `${percent}%`,
          height: "5px",
          backgroundColor: strokeColor,
        }}
      ></div>
      <p>{percent}%</p>
    </div>
  );
};

export default Line;
