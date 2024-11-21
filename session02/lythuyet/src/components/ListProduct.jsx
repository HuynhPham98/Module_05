import React from 'react'

export default function ListProduct() {
    const products = [
        {
            id:1,
            productName:"Iphone 12",
            price:200000,
            quantity:10
        },
        {
            id:2,
            productName:"Iphone 13",
            price:300000,
            quantity:10
        },
        {
            id:3,
            productName:"Iphone 14",
            price:400000,
            quantity:10
        },
    ]
  return (
    <>
    <h3>List Product</h3>
    <ul>
        {products.map((product,index) => (
            <li key={product.id}>
                <div>Id: {product.id}</div>
            <div>Name: {product.productName}</div>
            <div>Price: {product.price}</div>
            <div>Quantity: {product.quantity}</div>
            </li>
        ))}
    
    </ul>
    </>
  )
}
