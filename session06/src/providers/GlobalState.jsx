import React, { useState } from "react";
import Header from "../components/Header";
import ListProduct from "../components/ListProduct";
import products from "../data.json";

// B1: Tạo ngữ cảnh
export const CartContext = React.createContext();

const ACT_DOWN = "down";
const ACT_UP = "up";

export default function GlobalState() {
  const [carts, setCarts] = useState(() => {
    const cartLocal = JSON.parse(localStorage.getItem("carts")) || [];

    return cartLocal;
  });

  //Hàm lưu database vào local
  const saveData = (key, value) => {
    setCarts(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  //Thêm vào giỏ hàng

  const handleAddToCart = (product) => {
    // console.log(product);
    //Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const findProductById = carts.find((pro) => pro.id === product.id);
    if (findProductById) {
      //Nếu có thì tăng số lượng lên 1
      const updateCart = carts.map((pro) => {
        if (pro.id === product.id) {
          return { ...pro, quantity: pro.quantity + 1 };
        } else {
          return pro;
        }
      });

      saveData("carts", updateCart);
    } else {
      //Nếu chưa thì thêm sản phẩm vào trong cart
      const newCart = [...carts, { ...product, quantity: 1 }];

      saveData("carts", newCart);
    }
  };

  //Xóa khỏi giỏ hàng
  const handleDeleteCart = (id) => {
    // Lọc ra danh sách sản phẩm có id khác với id cần xóa
    const filterProduct = carts.filter((pro) => pro.id !== id);

    saveData("carts", filterProduct);
  };

  //Hàm update số lượng sản phẩm trong giỏ hàng
  const handleUpdateQuantity = (type, id) => {
    // console.log(type, id);
    if (type === ACT_UP) {
      //Cập nhật sống lượng cộng thêm 1
      const updateCart = carts.map((pro) => {
        return pro.id === id
          ? {
              ...pro,
              quantity:
                pro.quantity + 1 > pro.stock ? pro.stock : pro.quantity + 1,
            }
          : pro;
      });
      saveData("cart", updateCart);
    } else {
      //Cập nhật số lượng trừ 1
      const updateCart = carts
        .map((pro) => {
          return pro.id === id
            ? {
                ...pro,
                quantity: pro.quantity - 1,
              }
            : pro;
        })
        .filter((pro) => pro.quantity > 0);
      saveData("cart", updateCart);
    }
  };
  return (
    <>
      <CartContext.Provider
        value={{
          products,
          handleAddToCart,
          carts,
          handleDeleteCart,
          handleUpdateQuantity,
        }}
      >
        <Header />

        <ListProduct />
      </CartContext.Provider>
    </>
  );
}
