function ListGroup() {
  const cites = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Rome",
  ];

  return (
    <>
      <h1>My best countries: </h1>
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
