import React from "react";
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from "./Message/Message";

export type DialogPropsType = {
  id: string
  name: string
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

  const dialogsDataElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)
  const messagesDataElements = messagesData.map(m => <Message id={m.id} message={m.message} />)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsDataElements}
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        {messagesDataElements}
      </div>
    </div>
  );
}


