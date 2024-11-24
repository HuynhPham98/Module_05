import React, { useState } from "react";

export default function Document() {
  const [item, setItem] = useState("Nội dung ban đầu !");

  const handleText = () => {
    setItem((prev) =>
      prev === "Nội dung ban đầu !"
        ? "Nội dung đã được thay đổi"
        : "Nội dung ban đầu !"
    );
  };
  return (
    <div>
      <p>{item}</p>
      <button onClick={handleText}>Thay đổi</button>
    </div>
  );
}
