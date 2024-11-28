import React, { useContext } from "react";
import { GlobalContext } from "../providers/GlobalState";

export default function GrandChildrenComponent() {
  const result = useContext(GlobalContext);
  console.log("Result: ", result);

  return (
    <div>
      <h3>GrandChildrenComponent</h3>
      <h3>UserName: {result.userName}</h3>
      <h3>Count: {result.count}</h3>
      <button onClick={result.handleIncrement}>Increment</button>
    </div>
  );
}
