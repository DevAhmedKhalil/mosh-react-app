import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(!alertVisible)}>
          This is an alert message!
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(!alertVisible)}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
