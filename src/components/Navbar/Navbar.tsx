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
          <div className={s.friends_item}>
            <img src='http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'/>
            Andrew
          </div>
          <div className={s.friends_item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e5DlsOkJ8OWU-8WCb30W6_oNXo12sCwpHQ&usqp=CAU'/>
            Sasha
          </div>
          <div className={s.friends_item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzGBydv0evnLzL0WUe6_lfqp7cE_qlWM5vw&usqp=CAU'/>
            Sveta
          </div>
        </div>
      </div>
    </nav> 
    
  );
}