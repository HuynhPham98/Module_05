// ColorContainer.js
import React from "react";
import Color from "./Color";

export default function ColorContainer({ colors, changeColor }) {
  return (
    <div className="color-container">
      {colors.map((color) => (
        <Color key={color.id} color={color} changeColor={changeColor} />
      ))}
    </div>
  );
}
