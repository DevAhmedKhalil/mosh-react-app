import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import cagegories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

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
      category: "Entertainment",
    },
    { id: 4, description: "Gym Membership", amount: 30, category: "Health" },
  ]);

  const visableExpenses =
    selectedCategory && selectedCategory !== "all"
      ? expences.filter(
          (expense) =>
            expense.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : expences;

  return (
    <div>
      <h1 className="text-center my-4">Expense Tracker</h1>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) => {
            setExpences([...expences, { ...expense, id: expences.length + 1 }]);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        expenses={visableExpenses}
        onDelete={(id) => {
          setExpences(expences.filter((expense) => expense.id !== id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
