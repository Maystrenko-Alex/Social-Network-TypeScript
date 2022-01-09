import React from "react";
import { DialogsDataType, MessagesDataType } from "../../redux/state";
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from "./Message/Message";

export type DialogsPropsType = {
  dialogs: DialogsDataType
  messages: MessagesDataType
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsDataElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
  const messagesDataElements = props.messages.map(m => <Message id={m.id} message={m.message} />)
  
  const newMessageRef = React.createRef<HTMLTextAreaElement>();
  const addPost = () => {
    alert('newPost: ' +  newMessageRef.current?.value)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsDataElements}
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        {messagesDataElements}
        <div>
          <textarea ref={newMessageRef}></textarea>
          <button onClick={addPost}>Add new post</button>
        </div>
      </div>
    </div>
  );
}


