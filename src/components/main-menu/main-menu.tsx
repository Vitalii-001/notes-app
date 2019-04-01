import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import MenuList from "@material-ui/core/MenuList/MenuList";

import { Link } from 'react-router-dom';
import React from 'react';

import './main-menu.scss'


export const MainMenu = () => {
  return (
      <MenuList className="main-menu">
        <Link className="main-menu__link" to='/'><MenuItem>Home</MenuItem></Link>
        <Link className="main-menu__link" to='/pupils'><MenuItem>Pupils</MenuItem></Link>
        <Link className="main-menu__link" to='/teachers'><MenuItem>Teachers</MenuItem></Link>
      </MenuList>
  )
};
