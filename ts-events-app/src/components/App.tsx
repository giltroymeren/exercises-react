import React from "react";
import Calendar from "./Calendar/Calendar";
import Recorder from "./Recorder/Recorder";

function App() {
  return (
    <div>
      <h1>Events App</h1>
      <Recorder />
      <Calendar />
    </div>
  );
}

export default App;
