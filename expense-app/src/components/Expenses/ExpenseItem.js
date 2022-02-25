import React, { useState } from 'react'

import Card from './../UI/Card'
import ExpenseDate from './ExpenseDate'

import './ExpenseItem.css'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Hello')
    console.log('clicked!')
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">PHP {props.price}</div>
        </div>
        <button onClick={clickHandler}>Edit</button>
      </Card>
    </li>
  )
}

export default ExpenseItem