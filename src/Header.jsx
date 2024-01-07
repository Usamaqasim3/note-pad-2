import React from 'react'
import logo from './logo2.png'
const Header = ({ setSearchTerm }) => {
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className='header'>
    
    <img src={logo} alt="logo" />
    <h1 className='logo-text'>Daily Notes</h1>
    <div className='search-bar'>
    <input
        className='search-bar'
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
      </div>
    </div>
  )
}

export default Header