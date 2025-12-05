import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Checken"],
    });
  };

  return (
    <div>
      <h1>Pizza</h1>
      {pizza.name}
      <br />
      {pizza.toppings.map((p) => p)}
      <br />
      <br />
      <button onClick={handleClick}>Adding Toppings To Pizza </button>
    </div>
  );
}

export default App;
