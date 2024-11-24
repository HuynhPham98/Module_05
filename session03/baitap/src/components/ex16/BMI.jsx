import React, { useState } from "react";
import FormBmi from "./FormBmi";

export default function BMI() {
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBmi = (height, weight) => {
    const result = weight / (height * height);
    setBmi(result.toFixed(2)); // Cập nhật BMI với 2 chữ số sau dấu phẩy

    if (result < 18.5) {
      setStatus("Gầy");
    } else if (result < 25) {
      setStatus("Bình thường");
    } else if (result < 30) {
      setStatus("Tiền béo phì");
    } else if (result < 35) {
      setStatus("Béo phì độ 1");
    } else if (result < 40) {
      setStatus("Béo phì độ 2");
    } else {
      setStatus("Béo phì độ 3");
    }
  };

  return (
    <div>
      <h1>Tính chỉ số BMI</h1>
      <FormBmi calculateBmi={calculateBmi} />
      <p>Kết quả bmi: {bmi !== null ? bmi : "Chưa có kết quả"}</p>
      <p>Tình trạng cơ thể: {status}</p>
    </div>
  );
}
