import React from "react";
import "./Category.css";
import { NavLink } from "react-router-dom";

const category = () => {
  return (
    <div className="category">
      <NavLink to={"/image/Mountain"}>
        <h3>Mountain</h3>
      </NavLink>
      <NavLink to={"/image/Beaches"}>
        <h3>Beaches</h3>
      </NavLink>
      <NavLink to={"/image/Birds"}>
        <h3>Birds</h3>
      </NavLink>
      <NavLink to={"/image/Food"}>
        <h3>Food</h3>
      </NavLink>
    </div>
  );
};

export default category;
