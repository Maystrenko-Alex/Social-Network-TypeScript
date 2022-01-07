import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

export type DialogPropsType = {
  id: string
  name: string
}

type MessagePropsType = {
  message: string
}

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <Dialog id='1' name='Dimych' />
        <Dialog id='2' name='Andrew' />
        <Dialog id='3' name='Sveta' />
        <Dialog id='4' name='Sasha' />
        <Dialog id='5' name='Viktor' />
        <Dialog id='6' name='Viktor' />
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yoo" />
      </div>
    </div>
  );
}

const Dialog = (props: DialogPropsType) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink
        to={path}
        style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}