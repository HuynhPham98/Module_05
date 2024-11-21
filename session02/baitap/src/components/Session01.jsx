import React from "react";

export default function Session01() {
  const list = [
    { name: "HTML" },
    { name: "Javascript" },
    { name: "Python" },
    { name: "C#" },
  ];
  return (
    <>
      <h1>DANH SÁCH KHÓA HỌC</h1>
      <ul>
        {list.map((li) => (
          <li>{li.name}</li>
        ))}
      </ul>
    </>
  );
}
