import React, { useContext } from "react";
import { Button } from "antd";
import { formatMoney } from "../untils/FormatData";
import { CartContext } from "../providers/GlobalState";
export default function ProductCard({ product }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <>
      <li className="border rounded-md shadow-sm ">
        <div>
          <img
            className="max-h-[200px] min-h-[300px] object-cover"
            src={product.image}
            alt=""
          />
          <div className="p-5 flex flex-col gap-3 items-center  ">
            <h3 className="font-semibold ">{product.productName}</h3>
            <p>{formatMoney(product.price)}</p>
            <Button
              onClick={() => handleAddToCart(product)}
              className="w-full h-9"
              type="primary"
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </li>
    </>
  );
}
