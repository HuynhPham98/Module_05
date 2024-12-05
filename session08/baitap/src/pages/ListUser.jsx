import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const users = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      email: "nva@gmail.com",
      address: "Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Văn B",
      email: "nvb@gmail.com",
      address: "Hà Nam",
    },
    {
      id: 3,
      userName: "Nguyễn Văn C",
      email: "nvc@gmail.com",
      address: "Ninh Bình",
    },
  ];
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Id: {user.id}</p>
            <p>UserName: {user.userName}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <Link to={`/user-detail/${user.id}`} state={user}>
              <Button type="primary">Xem chi tiết</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
