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
    </div>
  );
}

export default App;
