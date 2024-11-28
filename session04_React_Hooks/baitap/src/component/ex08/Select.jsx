import React from "react";
import { useState } from "react";

export default function Select() {
  const citys = ["Hà Nội", "Hà Nam", "Ninh Bình", "Thanh Hóa", "Nghệ An"];
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <p>Thành phố: {city}</p>
      <select onChange={handleChange}>
        <option>Chọn Thành Phố</option>
        {citys.map((city) => (
          <option>{city}</option>
        ))}
      </select>
    </div>
  );
}
