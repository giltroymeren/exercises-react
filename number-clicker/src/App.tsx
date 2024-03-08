import React from "react";
import "./App.css";
import ClickButton from "./components/ClickButton";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex justify-center">
      <div className="w-1/3 flex flex-col">
        <div className="text-center px-8 py-20">
          <span className="text-9xl text-slate-600 font-mono">{count}</span>
        </div>
        <div className="flex">
          <ClickButton
            color="green"
            onClick={() => setCount((previous) => previous + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </ClickButton>

          <ClickButton color="yellow" onClick={() => setCount(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25
                8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 
                3.182m0-4.991v4.99"
              />
            </svg>
          </ClickButton>

          <ClickButton
            color="red"
            onClick={() => setCount((previous) => previous - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </ClickButton>
        </div>
      </div>
    </div>
  );
}

export default App;
