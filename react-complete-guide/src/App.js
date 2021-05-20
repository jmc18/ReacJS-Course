import React, { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const [expenseData, setExpenseData] = useState([
		{
			id: 'e1',
			title: 'Car Insuranse',
			amount: 294.67,
			date: new Date(2021, 2, 28)
		},
		{
			id: 'e2',
			title: 'Car Insuranse',
			amount: 294.67,
			date: new Date(2021, 2, 28)
		},
		{
			id: 'e3',
			title: 'Car Insuranse',
			amount: 294.67,
			date: new Date(2021, 2, 28)
		},
		{
			id: 'e4',
			title: 'Car Insuranse',
			amount: 294.67,
			date: new Date(2021, 2, 28)
		}
	]);

	const addExpenseHandler = (expense) => {
		const newExpense = expenseData.push(expense);
		setExpenseData({ ...expenseData, newExpense });
		console.log(expenseData);
	};

	const filterExpensesByYear = (year) => {
		console.log(year);
	};

	return (
		<div>
			<NewExpense newExpense={addExpenseHandler} />
			<ExpenseList filterYear={filterExpensesByYear} expenses={expenseData} />
		</div>
	);
};

export default App;
