import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

export type DialogPropsType = {
  id: string
  name: string
}

type MessagePropsType = {
  id: string
  message: string
}
type DialogType = {
  id: string
  name: string
}
export type DialogsDataType = Array<DialogType>

export const Dialogs = () => {
  let dialogsData: DialogsDataType = [
    { id: '1', name: 'Dimych' },
    { id: '2', name: 'Andrew' },
    { id: '3', name: 'Sveta' },
    { id: '4', name: 'Sasha' },
    { id: '5', name: 'Viktor' },
    { id: '6', name: 'Viktor' }
  ]

  let messagesData = [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'How are you?' },
    { id: '3', message: 'Yoo' },
    { id: '4', message: 'Yoo' },
    { id: '5', message: 'Yoo' }
  ]

  const dialogsJSX = dialogsData.map( d => <Dialog id={d.id} name={d.name} />)
  const messagesJSX = messagesData.map( m => <Message id={m.id} message={m.message} />)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsJSX}
        {/* <Dialog id='1' name='Dimych' />
        <Dialog id='2' name='Andrew' />
        <Dialog id='3' name='Sveta' />
        <Dialog id='4' name='Sasha' />
        <Dialog id='5' name='Viktor' />
        <Dialog id='6' name='Viktor' /> */}
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        {messagesJSX}
        {/* <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yoo" /> */}
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
    <div className={s.message} id={props.id}>{props.message}</div>
  );
}