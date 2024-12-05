import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListProduct() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/product-detail");
  };
  const handleNextPage = () => {
    navigate(1);
  };
  return (
    <div>
      <h3>List Product</h3>
      <button onClick={handleRedirect}>Product Detail</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}
