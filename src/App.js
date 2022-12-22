import { useState } from "react";
import "./App.css";

// const orders = [100, 200, 300];

function App() {
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur);
  //   return total;
  // });

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // };

  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "HCM",
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Yêu màu hồng",
    });
  };

  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Increase</button>
    </div>
  );
}

export default App;
