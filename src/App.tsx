import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Caffee",
    price: 25,
  });

  const handleClick = () => {
    //? Update drink price
    //@ When dealing with [objects & arrays] =>
    //@ you shoud remember to treat them as immutable or read only.

    const newDrink = {
      // title: drink.title,
      ...drink,
      price: drink.price + 5,
    };

    setDrink(newDrink);
  };

  return (
    <div>
      {"The Drink is: " + drink.title}
      {"The Price is: " + drink.price}
      <br />
      <br />
      <button onClick={handleClick}>Update The Price</button>
    </div>
  );
}

export default App;
