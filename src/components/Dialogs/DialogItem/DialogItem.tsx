import React from "react";
import { NavLink } from "react-router-dom";
import { DialogPropsType } from "../Dialogs";
import s from './DialogItem.module.css';


    
export const DialogItem = (props: DialogPropsType) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink
        to={path}
        className={s.navlink_style + ' ' + s.active}
        style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>{props.name}</NavLink>
    </div>
  );
}
