import React from "react";
import { DialogsDataType, MessagesDataType } from "../..";
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from "./Message/Message";

export type DialogsPropsType = {
  dialogsData: DialogsDataType
  messagesData: MessagesDataType
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsDataElements = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)
  const messagesDataElements = props.messagesData.map(m => <Message id={m.id} message={m.message} />)

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


