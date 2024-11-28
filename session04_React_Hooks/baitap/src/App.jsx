import { useState } from "react";
import "./App.css";
import UserName from "./component/ex01/UserName";
import Products from "./component/ex02/Products";
import ChangeColor from "./component/ex03/ChangeColor";
import Toggle from "./component/ex04/Toggle";
import Form from "./component/ex05/Form";
import Count from "./component/ex06/Count";
import CountText from "./component/ex07/CountText";
import Select from "./component/ex08/Select";
import Radio from "./component/ex09/Radio";
import Checkbox from "./component/ex10/Checkbox";
import ListWork from "./component/ex11/ListWork";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UserName /> */}
      {/* <Products /> */}
      {/* <ChangeColor /> */}
      {/* <Toggle /> */}
      {/* <Form /> */}
      {/* <Count /> */}
      {/* <CountText /> */}
      {/* <Select /> */}
      {/* <Radio /> */}
      {/* <Checkbox /> */}
      <ListWork />
    </>
  );
}

export default App;
