import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={(city) => console.log(city)}
      />
    </div>
  );
}

export default App;
