import { useEffect, useRef, useState } from "react";

const DEFAULT_URL = `ws://159.89.15.214:8080/`

function useWebSocket(url = DEFAULT_URL) {
  const [data, setData] = useState({})
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

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

      webSocket.current = new WebSocket(url);
      webSocket.current.onopen = function () {
        console.info('Connected to WS')
        setIsConnected(true)
        setIsLoading(false)
      }
      webSocket.current.onmessage = function (event) {
        console.info('Receiving message')
        setData(JSON.parse(event.data))
      }
      webSocket.current.onclose = function () {
        console.info('Disconnected from WS; attempting reconnection in 1 second... ')
        setIsConnected(false)
        setIsLoading(true)
        setTimeout(() => connectToServer(), 1000)
      }
    } catch (event) {
      setError(event.message)
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
      setError(error.message)
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
      setError(error.message)
    }
  }

  return {
    data,
    isConnected,
    isLoading,
    error,

    connectToServer,
    disconnectToServer,
    subscribeToServer,
    unsubscribeToServer
  }
}

export default useWebSocket