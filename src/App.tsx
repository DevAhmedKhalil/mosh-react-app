import { useState } from "react";
import { produce } from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      <h1>Bugs</h1>
      <ul>
        {bugs.map((bug, index) => (
          <li key={index}>
            {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Fix Bug 1</button>
    </div>
  );
}

export default App;
