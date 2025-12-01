import { MouseEvent } from "react";

function ListGroup() {
  let cites = ["New York", "San Francisco", "Tokyo", "London", "Paris", "Rome"];

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>My best countries: </h1>

      {cites.length > 0 && <p>Showing {cites.length} cities</p>}
      {/* true && 1 = 1 || true && 0 = 0 || true && ahmed = ahmed || false && ahmed = false */}

      <ul className="list-group ">
        {cites.map((city, index) => (
          <li key={city} className="list-group-item" onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
