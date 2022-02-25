import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const INITIAL_EXPENSES = [
  { 
    id: 'e0',
    date: new Date(2020, 10, 30),
    title: 'Halloween Groceries',
    price: 1555.25
  },
  { 
    id: 'e10',
    date: new Date(2020, 12, 11),
    title: 'Resin Tools',
    price: 250.00
  },
  { 
    id: 'e20',
    date: new Date(2021, 2, 14),
    title: 'Chocolate Trip',
    price: 851.24
  },
  {
    id: 'e1',
    title: 'Toilet Paper',
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV',
    price: 799.49,
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    price: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (newData) => {
    setExpenses((prevExpenses) => {
      return [...expenses, newData]
    })
    console.log(expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
