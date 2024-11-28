import React from "react";
import { useState } from "react";

export default function Form() {
  const [content, setContent] = useState("");
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <p>Nội dung: {content}</p>
      <input type="text" onChange={handleContent} placeholder="Nội dung nhập" />
    </div>
  );
}
