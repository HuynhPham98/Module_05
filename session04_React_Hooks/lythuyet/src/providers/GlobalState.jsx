import React, { useState } from "react";
import ParentComponent from "../component/ParentComponent";

//B1: Tạo ngữ cảnh
export const GlobalContext = React.createContext();

export default function GlobalState() {
  const [userName, setUserName] = useState("a");
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <GlobalContext.Provider value={{ userName, count, handleIncrement }}>
      <ParentComponent />
    </GlobalContext.Provider>
  );
}
