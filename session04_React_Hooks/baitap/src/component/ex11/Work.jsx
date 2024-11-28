import React from "react";

export default function Work({ work, handleChange }) {
  const handleEdit = () => {};

  const handleDelete = () => {};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 0",
      }}
    >
      <div>
        <input type="checkbox" value={work.name} onChange={handleChange} />
        <label htmlFor="">{work.name}</label>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <button onClick={handleEdit}>Sửa</button>
        </div>
        <div>
          <button onClick={handleDelete}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
