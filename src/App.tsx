import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // After Render
  useEffect(() => {
    // Side Effect: Focus the input element when the component mounts
    if (ref.current) {
      ref.current.focus();
    }
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-controle" />
    </div>
  );
}

export default App;
