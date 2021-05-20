import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../Expenses/ExpensesFilter';
import './ExpenseList.css';

const ExpenseList = (props) => {
	const [filterYear, setFilterYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
		props.filterYear(filterYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selectedYear={filterYear}
				onSelectedYear={filterChangeHandler}
			/>
			{props.expenses.map((item, index) => (
				<ExpenseItem
					key={index}
					date={item.date}
					title={item.title}
					amount={item.amount}
				/>
			))}
		</Card>
	);
};

export default ExpenseList;
