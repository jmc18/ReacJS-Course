import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
	/*const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');*/

	const [formInput, setFormInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	});

	const titleChangeHandler = (event) => {
		setFormInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};
	const amountChangeHandler = (event) =>
		setFormInput({ ...formInput, enteredAmount: event.target.value });
	const dateChangeHandler = (event) =>
		setFormInput({ ...formInput, enteredDate: event.target.value });

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: formInput.enteredTitle,
			amount: formInput.enteredAmount,
			date: new Date(formInput.enteredDate)
		};

		props.onSaveExpenseData(expenseData);

		setFormInput({
			...formInput,
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: ''
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={formInput.enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={formInput.enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={formInput.enteredDate}
						min="2019-01-01"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
