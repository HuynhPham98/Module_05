// Color.js
import React from "react";

export default function Color({ color, changeColor }) {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color.color }}
      onClick={() => changeColor(color.id)}
    >
      {color.color}
    </div>
  );
}
