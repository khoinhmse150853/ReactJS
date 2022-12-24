import { useState } from "react";
import "./App.css";
import Content from "./StudyComponents/Content";

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

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Increase</button>
      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content />}
      </div>
    </div>
  );
}

export default App;
