import React from "react";
import { v1 } from "uuid";
import s from './Navbar.module.css';

export const Navbar = () => {
  const navbarList = ['Profile', 'Message', 'News', 'Music', 'Settings'];
  const navbarJSX = navbarList.map(item => {
    return (
    (item === 'Message')
      ? <div className={s.item} key={v1()}>
        <a href={'/dialogs'} >{item}</a>
      </div>
      : <div className={s.item} key={v1()}>
        <a href={'/' + item.toLowerCase()} >{item}</a>
      </div>
    )
  })
  return (
    <nav className={s.navbar_wrapper}>
      {navbarJSX}
    </nav> 
  );
}