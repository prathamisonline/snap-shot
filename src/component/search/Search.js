import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./search.css";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="search..."
        name="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FiSearch className="svg" />
      </button>
    </form>
  );
};

export default Search;
