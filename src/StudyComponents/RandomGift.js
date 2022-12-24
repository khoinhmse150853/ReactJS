import { useState } from "react";

const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

function App() {
  const [gift, setGift] = useState("Chưa có phần thưởng");

  const handleClick = () => {
    const random = Math.floor(Math.random() * gifts.length);
    setGift(gifts[random]);
};

  return (
    <div className="App">
      <h1>{gift}</h1>
      <button onClick={handleClick}>Lấy thưởng</button>
    </div>
  );
}

export default App;
