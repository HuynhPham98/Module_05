import React from "react";
import { useState } from "react";

export default function Products() {
  const products = { id: 1, name: "Coca cola", price: "1000$", quantity: 10 };
  const [product, setProduct] = useState(products);
  return (
    <div>
      <h3>Thông tin sản phẩm</h3>
      <div>Id: {product.id}</div>
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div>Quantity: {product.quantity}</div>
    </div>
  );
}
