import { useState } from "react";

function ListGroup() {
  let cites = ["New York", "San Francisco", "Tokyo", "London", "Paris", "Rome"];

  // State Hook
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>My best countries: </h1>

      {cites.length > 0 && <p>Showing {cites.length} cities</p>}

      <ul className="list-group ">
        {cites.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
