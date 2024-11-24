import React, { useState } from "react";

export default function FormBmi({ calculateBmi }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmi(parseFloat(height), parseFloat(weight));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Chiều Cao</label>
        <input
          type="number"
          value={height}
          onChange={handleHeightChange}
        />{" "}
        <br />
        <label htmlFor="">Cân Nặng</label>
        <input
          type="number"
          value={weight}
          onChange={handleWeightChange}
        />{" "}
        <br />
        <button type="submit">Tính BMI</button>
      </form>
    </div>
  );
}
