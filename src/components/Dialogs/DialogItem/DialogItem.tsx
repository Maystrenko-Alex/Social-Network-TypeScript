import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

type DialogItemPropsType = {
  id: string,
  name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
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
