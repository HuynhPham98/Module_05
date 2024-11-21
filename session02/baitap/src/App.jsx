import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Session01 from "./components/session01";
import Session05 from "./components/Session05";
import Session06 from "./components/Session06";
import Session07 from "./components/session07/Session07";
import Session08 from "./components/session08/Session08";
import Session09 from "./components/session09/Session09";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Session01 /> */}
      {/* <Session05 a={5} b={10} /> */}
      {/* <Session06 /> */}
      {/* <Session07 /> */}
      {/* <Session08 /> */}
      <Session09 />
    </>
  );
}

export default App;
