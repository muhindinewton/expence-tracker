import React from "react";

function ExpenseTable({ expenses, deleteExpense }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg bg-gray-50 p-6 mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Expense Details</h2>
      <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-4 text-left">Expense</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 bg-white divide-y divide-gray-200">
          {expenses.map((expense, idx) => (
            <tr key={idx} className="hover:bg-gray-100 transition-all duration-200">
              <td className="p-4">{expense.name}</td>
              <td className="p-4">{expense.description}</td>
              <td className="p-4">{expense.category}</td>
              <td className="p-4">Ksh {expense.amount}</td>
              <td className="p-4">{expense.date}</td>
              <td className="p-4">
                <button
                  onClick={() => deleteExpense(idx)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {expenses.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500">
                No expenses to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
