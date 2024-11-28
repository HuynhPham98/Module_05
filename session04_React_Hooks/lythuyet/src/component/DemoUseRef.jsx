import React, { useEffect, useRef, useState } from "react";

export default function DemoUseRef() {
  const inputRef = useRef(null);
  const headingRef = useRef(null);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  //   console.log(inputRef.current);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setTime(time + 1);
  //     }, 1000);
  //   });

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h3>DemoUseRef</h3>
      <input type="text" id="input" ref={inputRef} />
      <h3 ref={headingRef}>Heading {count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <h3>Time: {time}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
