import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

function NewExpense(props) {
	const [isAdding, setIsAdding] = useState(false)

	const startAddingHandler = () => {
		setIsAdding(true)
	}

	const stopAddingHandler = () => {
		setIsAdding(false)
	}

	const saveExpenseData = (newData) => {
		const data = {
			...newData,
			id: Math.random().toString()
		}

		props.onAddExpense(data)
	}

	return (
		<div className="new-expense">
			{!isAdding && <button onClick={startAddingHandler}>Add New Expense</button>}
			{isAdding && <ExpenseForm
				onSaveExpenseData={saveExpenseData}
				onCancel={stopAddingHandler}/>}
		</div>
	)
}

export default NewExpense