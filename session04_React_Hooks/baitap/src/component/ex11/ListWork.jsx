import React from "react";
import { useState } from "react";
import Work from "./Work";

export default function ListWork() {
  const [arrWork, setArrWork] = useState([]);
  const [newWork, setNewWork] = useState("");
  const [error, setError] = useState("");
  const listWork = [
    { id: 1, name: "Code" },
    { id: 2, name: "Đá bóng" },
    { id: 3, name: "Đi chơi" },
    { id: 4, name: "Chơi Game" },
  ];
  const [listWorks, setListWorks] = useState(listWork);

  const handleChange = (e) => {
    // Lấy giá trị của checkbox (tên công việc)
    const result = e.target.value;

    // Cập nhật trạng thái mảng arrWork (danh sách công việc đã hoàn thành)
    setArrWork((prev) => {
      if (e.target.checked) {
        // Nếu checkbox được check, thêm công việc vào mảng arrWork
        return [...prev, result];
      } else {
        // Nếu checkbox bị uncheck, xóa công việc khỏi mảng arrWork
        return prev.filter((item) => item !== result);
      }
    });
  };
  const count = arrWork.length;

  const handleInput = (e) => {
    setNewWork(e.target.value);
  };
  const handleAdd = () => {
    if (!newWork.trim()) {
      setError("Vui lòng nhập tên công việc!");
      return;
    }
    if (listWork.some((item) => item.name === newWork)) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    const newId = Math.max(...listWorks.map((item) => item.id), 0) + 1;
    const newTask = { id: newId, name: newWork.trim() };
    setListWorks((prev) => [...prev, newTask]);
    setNewWork("");
  };

  const handleDeleteWork = (id) => {
    setListWorks((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div style={{ width: "400px" }}>
      <h3>Danh sách công việc</h3>
      <div
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "70%" }}>
          <input
            type="text"
            style={{ padding: "5px", width: "100%" }}
            onChange={handleInput}
          />
        </div>
        <div>
          <button onClick={handleAdd}>Thêm</button>
        </div>
      </div>
      {error && (
        <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {error}
        </p>
      )}
      <div>
        {listWorks.map((item) => (
          <Work key={item.id} work={item} handleChange={handleChange} />
        ))}
      </div>
      <div>
        <p>
          Công việc đã hoàn thành:{count}/{listWorks.length}
        </p>
      </div>
    </div>
  );
}
