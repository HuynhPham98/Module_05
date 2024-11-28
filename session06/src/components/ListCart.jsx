import React, { useContext } from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { CartContext } from "../providers/GlobalState";

export default function ListCart() {
  const { carts } = useContext(CartContext);
  return (
    <>
      <div className="absolute border w-[450px] max-h-[600px] right-0 rounded-md bg-slate-800 p-5 shadow-md top-11">
        {/* Cart Header start */}
        <CartHeader />
        {/* Cart Header end */}

        {/* Cart Item start */}
        <div className="py-3 flex-col gap-6 min-h-[450px] max-h-[450px] overflow-auto mt-3">
          {carts.length === 0 ? (
            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
          ) : (
            <>
              {carts.map((cart) => (
                <React.Fragment key={cart.id}>
                  <CartItem cart={cart} />
                </React.Fragment>
              ))}
            </>
          )}
        </div>
        {/* Cart Item end */}
        {/* Cart Footer start */}
        <CartFooter />
        {/* Cart Footer end*/}
      </div>
    </>
  );
}
