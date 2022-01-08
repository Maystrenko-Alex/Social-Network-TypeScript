import React from "react";
import s from './Message.module.css';

type MessagePropsType = {
  id: string
  message: string
}

export const Message = (props: MessagePropsType) => {
  return (
    <div className={s.message} id={props.id}>{props.message}</div>
  );
}