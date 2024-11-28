import React from "react";
import { useState } from "react";

export default function CountText() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleCount = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    setCount(inputText.length);
  };
  return (
    <div>
      <textarea onChange={handleCount}></textarea>
      <p>Số ký tự: {count}</p>
    </div>
  );
}
