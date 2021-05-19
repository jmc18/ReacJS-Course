import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
	/*const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');*/

	const [formInput, setFormInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	});

	const titleChangeHandler = (event) =>
		setFormInput({ ...formInput, enteredTitle: event.target.value });
	const amountChangeHandler = (event) =>
		setFormInput({ ...formInput, enteredAmount: event.target.value });
	const dateChangeHandler = (event) =>
		setFormInput({ ...formInput, enteredDate: event.target.value });

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2019-01-01" onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
