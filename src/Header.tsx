// Header.js
import React from "react";

const Header = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </header>
  );
};

export default Header;
