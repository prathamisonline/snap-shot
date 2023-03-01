import React from "react";
import { Routes, Route } from "react-router-dom";
import Images from "./Images";
import Searched from "./Searched";
import Home from "./Home";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image/:type" element={<Images />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </div>
  );
};

export default Pages;
