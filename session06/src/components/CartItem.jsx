import { Button, Image, Modal } from "antd";
import React, { useContext, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { CartContext } from "../providers/GlobalState";

export default function CartItem({ cart }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [id, setId] = useState(null);

  const { handleDeleteCart, handleUpdateQuantity } = useContext(CartContext);
  // console.log(cart);

  //Hàm mở modal
  const handleOpenModal = (id) => {
    setIsShowModal(true);

    setId(id);
  };

  //Hàm đóng modal
  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  //Hàm xác nhận xóa
  const handleConfirmDeleteCart = () => {
    handleDeleteCart(id);

    handleCloseModal();
  };

  return (
    <div>
      <Modal
        onCancel={handleCloseModal}
        onOk={handleConfirmDeleteCart}
        title="Xác nhận"
        open={isShowModal}
        okText="Xóa"
        cancelText="Hủy"
      >
        Bạn có muốn xóa sản phẩm ra khỏi giỏ hàng hay không
      </Modal>
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src={cart?.image}
          />
          <p>{cart?.productName}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleUpdateQuantity("down", cart.id)}
            size="small"
          >
            -
          </Button>
          <span>{cart?.quantity}</span>
          <Button
            onClick={() => handleUpdateQuantity("up", cart.id)}
            size="small"
          >
            +
          </Button>
          <IoTrashOutline onClick={() => handleOpenModal(cart.id)} size={20} />
        </div>
      </div>
    </div>
  );
}
