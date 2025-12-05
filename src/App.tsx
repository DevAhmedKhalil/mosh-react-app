import { useState } from "react";
import Message from "./components/Message";

function App() {
  // const [firstName, setFirstName] = useState<string>("Ahmed");
  // const [lastName, setLastName] = useState<string>("Khalil");

  const [person, setPerson] = useState({
    firstName: "Ahmed",
    lastName: "Khalil",
  });

  const fullName = `${person.firstName} ${person.lastName}`.trim();

  return (
    <div>
      {fullName}
      <Message />
      {/* <Message /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
