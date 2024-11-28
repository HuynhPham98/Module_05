import { useState } from "react";

import "./App.css";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="text-[green] text-center text-[100px]">
        Hello world
      </header>
    </>
  );
}

export default App;
