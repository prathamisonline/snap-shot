import React from "react";
import { Routes, Route } from "react-router-dom";
import Images from "./Images";
import Searched from "./Searched";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/image/:type" element={<Images />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </div>
  );
};

export default Pages;
