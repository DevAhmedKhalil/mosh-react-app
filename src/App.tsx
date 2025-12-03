import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { FaCity } from "react-icons/fa";

function App() {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div>
      <FaCity color="blue" size={40} />
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={(city) => console.log(city)}
      />
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
