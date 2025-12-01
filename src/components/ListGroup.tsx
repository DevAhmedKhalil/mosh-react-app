function ListGroup() {
  let cites = ["New York", "San Francisco", "Tokyo", "London", "Paris", "Rome"];

  cites = [];

  return (
    <>
      <h1>My best countries: </h1>

      {/* {cites.length === 0 ? <p>No cities found</p> : null} */}
      {cites.length > 0 && <p>Showing {cites.length} cities</p>}
      {/* true && 1 = 1, true && 0 = 0, true && ahmed = ahmed, false && ahmed = false */}

      <ul className="list-group ">
        {cites.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
