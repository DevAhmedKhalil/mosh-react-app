import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Rome",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
