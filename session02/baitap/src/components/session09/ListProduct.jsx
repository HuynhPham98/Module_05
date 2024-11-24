import React from "react";
import Product from "./Product";

export default function ListProduct() {
  const products = [
    {
      id: 1,
      name: "Apple new mac book 2015 March :P",
      image: "/img/product-1.jpg",
      price: "$999.00",
      sale: "$899.00",
    },
    {
      id: 2,
      name: "Apple new mac book 2015 March :P",
      image: "/img/product-2.jpg",
      price: "$999.00",
      sale: "$899.00",
    },
    {
      id: 3,
      name: "Apple new mac book 2015 March :P",
      image: "/img/product-3.jpg",
      price: "$999.00",
      sale: "$899.00",
    },
    {
      id: 4,
      name: "Apple new mac book 2015 March :P",
      image: "/img/product-4.jpg",
      price: "$999.00",
      sale: "$899.00",
    },
  ];
  return (
    <>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </>
  );
}
