import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
	return (
		<div className="expenses">
			{props.expenses.map((item) => (
				<ExpenseItem
					key={item.id}
					date={item.date}
					title={item.title}
					amount={item.amount}
				/>
			))}
		</div>
	);
}

export default ExpenseList;
