import React, { useState } from "react";

export default function Ex09() {
  const [userName, setUserName] = useState("");
  const [submitName, setSubmitName] = useState("");

  const handleInput = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitName(userName);
    setUserName("");
  };
  return (
    <div>
      <p>Xin chào: {submitName}</p>
      <input type="text" value={userName} onChange={handleInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
