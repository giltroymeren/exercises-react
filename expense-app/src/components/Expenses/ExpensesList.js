import React from 'react'

import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

function ExpensesList(props) {
  const expenses = props.expenses
  
  if(expenses.length === 0) {
    return <h4 className="expenses-list__fallback">There are no records found.</h4>
  } else {
    return (
      <ul className="expenses-list">
        {expenses.map(item => {
          return <ExpenseItem
            key={item.id} 
            date={item.date}
            title={item.title}           
            price={item.price}
          />
        })}
      </ul>
    )
    
  }
}

export default ExpensesList