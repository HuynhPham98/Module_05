import { useState } from "react";
import "./App.css";
import OneWayAndTwoWayDatabinding from "./component/OneWayAndTwoWayDatabinding";
import DemoUseEffect from "./component/DemoUseEffect";
import DemoUseReducer from "./component/DemoUseReducer";
import GlobalState from "./providers/GlobalState";
import DemoUseRef from "./component/DemoUseRef";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(true);
  };

  return (
    <>
      {/* <OneWayAndTwoWayDatabinding /> */}
      {/* <button onClick={handleClick}>Toggle</button>

      {isShow === true ? <DemoUseEffect /> : <></>} */}

      {/* <DemoUseReducer /> */}
      {/* <GlobalState /> */}
      <DemoUseRef />
    </>
  );
}

export default App;
