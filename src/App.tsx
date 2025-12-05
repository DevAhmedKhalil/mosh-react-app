import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.5,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    // Update the quantity of the first item in the cart
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        // if (item.id === 1) {
        //   return { ...item, quantity: item.quantity + 1 };
        // }
        // return item;

        return item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item;
      }),
    });
  };

  return (
    <div>
      <h1>Cart: {cart.items.length} items</h1>
      {cart.items.map((item) => (
        <div key={item.id}>
          {item.title} - Quantity: {item.quantity}
        </div>
      ))}
      <br />
      <br />
      <button onClick={handleClick}>Add quantity</button>
    </div>
  );
}

export default App;
