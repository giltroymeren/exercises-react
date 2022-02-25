import React, { useState } from 'react'

import './ExpenseForm.css'

function ExpenseForm(props) {
  const [newTitle, setNewTitle] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newDate, setNewDate] = useState('')
  // const [userInput, setUserInput] = useState({
  //   newTitle: '',
  //   newPrice: '',
  //   newDate: ''
  // })

  const titleChangeHandler = (event ) => {
    setNewTitle(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, newTitle: event.target.value }
    // })
  }

  const priceChangeHandler = (event ) => {
    setNewPrice(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, newPrice: event.target.value }
    // })
  }

  const dateChangeHandler = (event ) => {
    setNewDate(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, newDate: event.target.value }
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const newData = {
      title: newTitle,
      price: +newPrice,
      date: new Date(newDate)
    }

    props.onSaveExpenseData(newData)
    setNewTitle('')
    setNewPrice('')
    setNewDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.01" step="0.01"
            value={newPrice}
            onChange={priceChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-12-12" max="2022-12-31"
            value={newDate}
            onChange={dateChangeHandler}/>
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm