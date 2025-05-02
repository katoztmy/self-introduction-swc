import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About.js";
import { Home } from "./Home.js";
import { Detail } from "./Detail.js";
import { NotFound } from "./NotFound.js";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
