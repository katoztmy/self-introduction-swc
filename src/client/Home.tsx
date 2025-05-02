import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={countUp}>カウントアップ</button>
      <h1>Homeページ</h1>
      <p>このアプリはReactのサンプルです。</p>
    </>
  );
};
