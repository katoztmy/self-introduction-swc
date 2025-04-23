import React from "react";

export const App = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <p>This is a simple React app.</p>
      <p>It is rendered on the client side.</p>
      <p>Enjoy coding!</p>
      <button onClick={() => alert("aho")}>
        onClick時に関数が仕込んであるがHydrationをさせていないので発火しない
      </button>
    </>
  );
};
