const Food = ({ dot }) => {
  console.log(dot);
  return (
    <div
      className="snake-food"
      style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }}
    ></div>
  );
};

export default Food;
