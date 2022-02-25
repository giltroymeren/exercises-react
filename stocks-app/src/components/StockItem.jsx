import React from 'react'

const StockItem = ({ isin, price, onSubscribe, onUnsubscribe }) => {
  return (
    <tr>
      <td>{isin}</td>
      <td>{price.toFixed(2)}</td>
      <td><button onClick={() => onSubscribe(isin)}>Subscribe</button></td>
      <td><button onClick={() => onUnsubscribe(isin)}>Unsubscribe</button></td>
    </tr>
  )
}

export default StockItem
