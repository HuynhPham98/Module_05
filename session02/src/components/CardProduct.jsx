import React from "react";

export default function CardProduct() {
  return (
    <li key={product.id}>
      <div>Id: {product.id}</div>
      <div>Name: {product.productName}</div>
      <div>Price: {product.price}</div>
      <div>Quantity: {product.quantity}</div>
    </li>
  );
}
