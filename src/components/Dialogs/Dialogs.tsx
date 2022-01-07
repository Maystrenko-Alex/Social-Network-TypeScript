import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

export const Dialogs = () => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink 
            to={'/dialogs/1'} 
            style={({ isActive }) =>({color: isActive ? 'gold' : ''})}>Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink 
            to={'/dialogs/2'} 
            style={({ isActive }) =>({color: isActive ? 'gold' : ''})}>Andrew</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink 
            to={'/dialogs/3'} 
            style={({ isActive }) =>({color: isActive ? 'gold' : ''})}>Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink 
            to={'/dialogs/4'} 
            style={({ isActive }) =>({color: isActive ? 'gold' : ''})}>Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink 
            to={'/dialogs/5'} 
            style={({ isActive }) =>({color: isActive ? 'gold' : ''})}>Viktor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink 
            to={'/dialogs/6'} 
            style={({ isActive }) =>({color: isActive ? 'gold' : ''})}>Valera</NavLink>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Yoo</div>
      </div>
    </div>
  );
}