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

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
