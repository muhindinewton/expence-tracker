import { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    setFormData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
      {['name', 'description', 'category', 'amount', 'date'].map((field) => (
        <input
          key={field}
          type={field === 'amount' ? 'number' : field === 'date' ? 'date' : 'text'}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={`Enter ${field}`}
          required
          className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      ))}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 mt-4 rounded-lg hover:bg-purple-700"
      >
        Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
