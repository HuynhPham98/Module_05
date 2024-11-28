import React, { useState } from "react";
// Cơ chế này chỉ áp dụng cho input
export default function OneWayAndTwoWayDatabinding() {
  const [email, setEmail] = useState("");

  const handleChange = () => {
    setEmail("huynh@gmail.com");
  };
  return (
    <div>
      <h3>Email: {email}</h3>
      <input
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleChange}>Change value</button>
    </div>
  );
}
