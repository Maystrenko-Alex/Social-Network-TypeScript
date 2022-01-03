import React from "react";
import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={s.navbar_wrapper}>
          <div>Profile</div>
          <div>Message</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
        </nav>
  );
}