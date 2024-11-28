import React from "react";
import { useState } from "react";

export default function Radio() {
  const [gender, setGender] = useState("");
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <p>Giới tính: {gender}</p>
      <input type="radio" name="gender" onChange={handleChange} value="Nam" />
      Nam
      <input type="radio" name="gender" onChange={handleChange} value="Nữ" />
      Nữ
      <input type="radio" name="gender" onChange={handleChange} value="Khác" />
      Khác
    </div>
  );
}
