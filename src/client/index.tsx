import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About.js";
import { Home } from "./Home.js";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
