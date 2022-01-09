import React from "react";
import { NavLink } from "react-router-dom";
import { v1 } from "uuid";
import { FriendsType} from "../../redux/state";
import s from './Navbar.module.css';

export type NavbarPropsType = {
  friends: FriendsType
}

export const Navbar = (props: NavbarPropsType) => {
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
      <div className={s.friends_wrapper}>
        <div className={s.sidebar_head}>FRIENDS</div>
        <div className={s.friends}>
          <div id={props.friends[0].id} className={s.friends_item}>
            <img src={props.friends[0].ava} alt='#'/>
            {props.friends[0].name}
          </div>
          <div id={props.friends[1].id} className={s.friends_item}>
            <img src={props.friends[1].ava} alt='#'/>
            {props.friends[1].name}
          </div>
          <div id={props.friends[2].id} className={s.friends_item}>
            <img src={props.friends[2].ava} alt='#'/>
            {props.friends[2].name}
          </div>
        </div>
      </div>
    </nav> 
    
  );
}