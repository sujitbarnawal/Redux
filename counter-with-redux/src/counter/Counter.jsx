import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const addValue = Number(amount) || 0;

  return (
    <>
      <section>
        <div>
          <span>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
          </span>
        </div>
      </section>
      <br />
      <div>
        <button
          onClick={() => {
            dispatch(reset());
            setAmount(0);
          }}
        >
          Reset counter
        </button>
      </div>
      <br />
      <div>
        <label>Amount</label>
        <br />
        <input
          required
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />{" "}
        <br />
        <br />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Increment By Amount
        </button>
      </div>
    </>
  );
}

export default Counter;
