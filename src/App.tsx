import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "ahmed",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "saif slim ahmed" },
    });
  };

  return (
    <div>
      <h1>Game</h1>
      {"Id: " + game.id + "/ Player name: " + game.player.name}
      <br />
      <br />
      <button onClick={handleClick}>Change Player Name</button>
    </div>
  );
}

export default App;
