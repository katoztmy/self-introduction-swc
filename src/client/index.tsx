import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello, world!</h1>
      <button onClick={() => alert("HelloWorld!")}>アラート発火</button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        カウントアップ
      </button>
      <br />
      {count}
    </>
  );
};
