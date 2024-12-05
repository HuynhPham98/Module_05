import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDetail() {
  const location = useLocation();
  const user = location.state;

  return (
    <div>
      <h2>Chi tiết người dùng</h2>
      <p>
        <strong>Id: {user.id}</strong>
      </p>
      <p>
        <strong>Tên:</strong> {user.userName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {user.address}
      </p>
    </div>
  );
}
