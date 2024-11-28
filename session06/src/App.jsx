import { useState } from "react";
import GlobalState from "./providers/GlobalState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalState />
    </>
  );
}

export default App;
