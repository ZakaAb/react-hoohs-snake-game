import { useEffect, useState } from "react";
import "./App.css";
import Food from "./components/Food";

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomCoordinates(),
};

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setInterval(() => {
      setState({
        ...state,
        food: getRandomCoordinates(),
      });
    }, 1000);
  }, []);
  return (
    <div className="App">
      <div className="game-area">
        <Food dot={state.food} />
      </div>
    </div>
  );
}

export default App;
