import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expences, setExpences] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 75,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Internet Subscription",
      amount: 40,
      category: "Utilities",
    },
    { id: 4, description: "Gym Membership", amount: 30, category: "Health" },
  ]);

  return (
    <div>
      <h1 className="text-center my-4">Expense Tracker</h1>
      <ExpenseList
        expenses={expences}
        onDelete={(id) => {
          setExpences(expences.filter((expense) => expense.id !== id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
