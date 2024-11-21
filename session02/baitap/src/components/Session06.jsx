import React from "react";

export default function Session06() {
  const currentTime = new Date();
  return (
    <>
      <h3>Xin chào các bạn!</h3>
      <p>Bây giờ là: {currentTime.toLocaleTimeString()}</p>
    </>
  );
}
