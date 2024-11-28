import React, { useContext } from "react";
import { CartContext } from "../providers/GlobalState";
import { formatMoney } from "../untils/FormatData";

export default function CartFooter() {
  const { carts } = useContext(CartContext);
  // console.log(carts);

  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    total += carts[i].quantity * carts[i].price;
  }
  return (
    <div>
      <footer className="border-t mt-3 pt-3">
        Tổng tiền: {formatMoney(total)}
      </footer>
    </div>
  );
}
