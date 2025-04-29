import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";

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
