import React, { useState, useEffect } from 'react';
import Brightness3Icon from '@material-ui/icons/Brightness3';


const NavBar = ({ theme, toggleTheme }) => {
  const [color, setColor] = useState(theme);
  // console.log(theme);

  useEffect(() => {
    setColor(theme);
  }, [theme]);

  return (
    <div className="nav" id={color}>
      <h1 className="logo">Cowardly Dogs</h1>
      <Brightness3Icon className="theme-icon" id={color} onClick={() => toggleTheme()}/>
    </div>
  );
};

export default NavBar;