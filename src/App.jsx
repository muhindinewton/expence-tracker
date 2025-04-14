import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp, index) => index !== id));
  };

  const filteredExpenses = expenses.filter(
    ({ name, description }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="bg-white rounded-3xl p-8 max-w-7xl mx-auto shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Expense Tracker
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ExpenseForm addExpense={addExpense} />
          <div className="md:col-span-2">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ExpenseTable
              expenses={filteredExpenses}
              deleteExpense={deleteExpense}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
