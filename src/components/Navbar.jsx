import React, { useState, useEffect } from 'react';
import useStorage from '../Hooks/useStorage';
import useDarkMode from '../Hooks/useDarkMode';

const Navbar = () => {


  const [darkMode, setDarkMode] = useStorage(window.localStorage.getItem('use-dark'));

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

useDarkMode(darkMode);


  return (
    <nav className="navbar"> 
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
