import React from "react";
import { useState } from "react";

export default function UserName() {
  const [userName, setUserName] = useState("Phạm Văn Huỳnh");
  return (
    <div>
      <p>Họ và tên: {userName}</p>
    </div>
  );
}
