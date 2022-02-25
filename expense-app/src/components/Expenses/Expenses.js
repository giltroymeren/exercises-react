import React, { useState } from 'react'

import Card from './../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

const DEFAULT_YEAR = '2021';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(DEFAULT_YEAR)

  const filterChangeHandler = (year) => {
    setFilterYear(year)
  }

  // TODO: Implement no year filter, show all
  const filteredExpenses = props.expenses.filter(item => 
    item.date.getFullYear().toString() === filterYear)

  return(
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filterYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  )
}

export default Expenses