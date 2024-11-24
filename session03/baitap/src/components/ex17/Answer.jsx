import React from "react";

export default function Answer({ userAnswer, setUserAnswer, handleSubmit }) {
  return (
    <div>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)} // Cập nhật câu trả lời người dùng
        placeholder="Nhập câu trả lời"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
