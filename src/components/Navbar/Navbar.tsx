import React from "react";
import { NavLink } from "react-router-dom";
import { v1 } from "uuid";
import s from './Navbar.module.css';

export const Navbar = () => {
  const navbarList = ['Profile', 'Message', 'News', 'Music', 'Settings'];
  const navbarJSX = navbarList.map(item => {
    return (
    (item === 'Message')
      ? <div className={s.item} key={v1()}>
        <NavLink 
          style={({ isActive }) =>({color: isActive ? 'gold' : ''})} 
          to={'/dialogs'} >{item}</NavLink>
      </div>
      : <div className={s.item} key={v1()}>
        <NavLink 
        style={({ isActive }) =>({color: isActive ? 'gold' : ''})}
        to={'/' + item.toLowerCase()} >{item}</NavLink>
      </div>
    )
  })
  return (
    <nav className={s.navbar_wrapper}>
      {navbarJSX}
    </nav> 
  );
}