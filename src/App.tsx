import { useState } from "react";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { FaCity, FaHeart } from "react-icons/fa";

function App() {
  const [liked, setLiked] = useState(false); // ← ده الـ state الحقيقي

  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div>
      <FaHeart
        size={40}
        color={liked ? "red" : "gray"} // ← يتغير تلقائي
        onClick={() => {
          setLiked(!liked);
          console.log("clicked");
        }} // ← يغير الـ state
      />

      <br />

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
