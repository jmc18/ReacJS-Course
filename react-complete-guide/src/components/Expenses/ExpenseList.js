import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseList.css';

const ExpenseList = (props) => {
	return (
		<Card className="expenses">
			{props.expenses.map((item) => (
				<ExpenseItem
					key={item.id}
					date={item.date}
					title={item.title}
					amount={item.amount}
				/>
			))}
		</Card>
	);
};

export default ExpenseList;
