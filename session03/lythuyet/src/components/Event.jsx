import React from "react";

export default function Event() {
  const handleClick = (id) => {
    console.log("Clicked: ", id);
  };

  const handleDoubleClick = (event) => {
    console.log("Double Click: ", event);
  };
  return (
    <>
      <button onClick={() => handleClick(10)}>Click me</button>
      <button onDoubleClick={handleDoubleClick}>Double Click</button>
    </>
  );
}
