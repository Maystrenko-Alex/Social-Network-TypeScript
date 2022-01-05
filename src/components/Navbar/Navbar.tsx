import React from "react";
import s from './Navbar.module.css';

export const Navbar = () => {
  
  return (
    <nav className={s.navbar_wrapper}>
      <div className={s.item}>
        <a  href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/message">Message</a>
      </div>
      <div className={s.item}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={s.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
}