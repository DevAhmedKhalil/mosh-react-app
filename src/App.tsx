import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState<string>("Ahmed");
  // const [lastName, setLastName] = useState<string>("Khalil");

  const [person, setPerson] = useState({
    firstName: "Ahmed",
    lastName: "Khalil",
  });

  const fullName = `${person.firstName} ${person.lastName}`.trim();

  return <div>{fullName}</div>;
}

export default App;
