import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "exciting", "cheerful"]);

  const handleClick = () => {
    // Add tag for Array
    setTags([...tags, "sad"]);

    // Remove tag
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update tag
    setTags(tags.map((tag) => (tag === "happy" ? "not happy" : tag)));
  };

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
