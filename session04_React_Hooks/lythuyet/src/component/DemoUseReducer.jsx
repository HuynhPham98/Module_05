import React, { useReducer } from "react";

const initilaValue = 0;
const INCREMENT = "increment";
const DECREMENT = "decrement";

export default function DemoUseReducer() {
  const reducer = (state, action) => {
    switch (action) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initilaValue);

  const handleIncrement = () => {
    dispatch(INCREMENT);
  };

  const handleDecrement = () => {
    dispatch(DECREMENT);
  };
  return (
    <div>
      <h3>Value: {state}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
