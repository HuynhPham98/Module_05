import React from "react";
import CartItem from "./CartItem";

export default function ListCart() {
  const carts = [
    {
      id: 1,
      name: "Iphone 11 pro",
      description: "256GB,Navy Blue",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      quantity: 2,
      price: "$900",
    },
    {
      id: 2,
      name: "Samsung galaxy Note 10",
      description: "256GB, Navy Blue",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
      quantity: 2,
      price: "$900",
    },
    {
      id: 3,
      name: "Canon EOS M50",
      description: "256GB,Navy Blue",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
      quantity: 1,
      price: "$1199",
    },
    {
      id: 4,
      name: "MacBook Pro",
      description: "1TB, Graphite",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
      quantity: 1,
      price: "$1799",
    },
  ];
  return (
    <>
      {carts.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
}
