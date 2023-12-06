import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../store/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const [amount, setAmount] = useState(0);

  return (
    <>
      <div>
        <p>Count: {counter}</p>
        <div>
          <button onClick={() => dispatch(increment())}>ADD</button>
          <button onClick={() => dispatch(decrement())}>SUBTRACT</button>
        </div>
        <div>
          <input
            type="number"
            name="amount"
            id="amount"
            step={1}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button onClick={() => dispatch(incrementByAmount(amount))}>
            ADD
          </button>
          <button onClick={() => dispatch(decrementByAmount(amount))}>
            SUBTRACT
          </button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementAsync(100))}>ADD</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
