import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "ahmed",
    address: {
      city: "cairo",
      zipcode: 12345,
    },
  });

  const handleClick = () => {
    //@ When dealing with [objects & arrays] =>
    //@ you shoud remember to treat them as immutable or read only.
    //? Update nested objests

    // setCustomer({...customer});
    //# This object with refrence the same address on the memoryso

    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 111555 },
    });
    //# We want to make sure that the new obj is independent of the exsting object
  };

  return (
    <div>
      {"My name is: " +
        customer.name +
        " I live in: " +
        customer.address.city +
        " zip code is: " +
        customer.address.zipcode}
      <br />
      <br />
      <button onClick={handleClick}>Update The Price</button>
    </div>
  );
}

export default App;
