import { useState } from "react";
import ListProduct from "./components/ListProduct";

function App() {
  const [category, setCategory] = useState<string>("");

  return (
    <div>
      <select
        className="form-controle"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>

      <ListProduct category={category} />
    </div>
  );
}

export default App;
