import React from "react"

const WS_ADDRESS = 'ws://159.89.15.214:8080/'
const CONNECTION_INTERVAL = 1000
let webSocket = new WebSocket(WS_ADDRESS)

class Home extends React.Component {
  constructor(props: any) {
    super(props)

    this.state = {
      connected: false
    }
  }

  componentDidMount() {
    webSocket.onopen = () => {
      console.info(`Opened connection to ${WS_ADDRESS}`)
      this.setState({ connected: true })
    }

    webSocket.onmessage = (event) => {
      const json = JSON.parse(event.data);
      try {
        if (json) {
          console.log(json);
        }
      } catch (err) {
        console.log(err);
      }
    }

    webSocket.onclose = () => {
      console.info(`Closing connection to ${WS_ADDRESS}`)
      setTimeout(() => { webSocket = new WebSocket(WS_ADDRESS)},
        CONNECTION_INTERVAL)
        this.setState({ connected: false })
    }

    webSocket.onerror = () => {
      console.error(`Connection error to ${WS_ADDRESS} occurred`)
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Check the latest stock prices!</h1>
        </header>
      </div>
    )
  }
}

export default Home