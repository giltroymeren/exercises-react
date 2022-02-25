import { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { setConnected, setDisconnected } from "../context/actions"
import StockItem from "./StockItem"

const DEFAULT_URL = `ws://159.89.15.214:8080/`

const INITIAL_STATE = {
  isin: '',
  price: 0,
  bid: 0,
  ask: 0,
}

const StockList = ({
  stockList,
  connected,
  setConnected,
  setDisconnected
}) => {
  const [stockItem, setStockItem] = useState(INITIAL_STATE)

  const webSocket = useRef()

  useEffect(() => {
    console.log('Updating component...')
    connectToServer()
  })

  const connectToServer = () => {
    try {
      if (webSocket.current !== undefined && webSocket.current !== null && webSocket.current.readyState !== WebSocket.CLOSED) {
        return;
      }

      webSocket.current = new WebSocket(DEFAULT_URL);
      webSocket.current.onopen = function () {
        console.info('Connected to WS')
        setConnected()
      }
      webSocket.current.onmessage = function (event) {
        console.info('Receiving message')
        setStockItem(JSON.parse(event.data))
      }
      webSocket.current.onclose = function () {
        console.info('Disconnected from WS; attempting reconnection in 1 second... ')
        setDisconnected()

        setTimeout(() => connectToServer(), 1000)
      }
    } catch (event) {
      console.error(event.message)
    }
  }

  const disconnectToServer = () => webSocket.current.close()

  const subscribeToServer = (isin) => {
    try {
      if (webSocket.current.readyState !== WebSocket.OPEN) return;

      console.info('Subscribing via WS')
      webSocket.current.send(
        JSON.stringify({ "subscribe": isin })
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  const unsubscribeToServer = (isin) => {
    try {
      if (webSocket.current.readyState !== WebSocket.OPEN) return;

      console.info('Unsubscribing via WS')
      webSocket.current.send(
        JSON.stringify({ "unsubscribe": isin })
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <table>
        <tbody>
          <StockItem
            isin={stockItem.isin}
            price={stockItem.price}
            onSubscribe={subscribeToServer}
            onUnsubscribe={unsubscribeToServer}
          />
        </tbody>
      </table>

      {!connected &&
        <div>
          <button onClick={connectToServer}>Connect</button>
        </div>
      }

      {connected &&
        <div>
          <button onClick={disconnectToServer}>Disconnect</button>
        </div>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    stockList: state.stockList,
    connected: state.connected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setConnected: event => dispatch(setConnected()),
    setDisconnected: event => dispatch(setDisconnected())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList)
