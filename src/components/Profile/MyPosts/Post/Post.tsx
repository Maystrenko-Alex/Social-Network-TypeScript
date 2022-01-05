import React from "react";
import s from './Post.module.css';

type PropsType = {
  message: string
}

export const Post = (props: PropsType) => {
  return (
    <div className={s.post_wrapper}>
      <div className={s.post_ava}>
        <img className={s.ava}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQVSCDGGBYnXn3uTmCvnziuvAE_MS0Zk9dg&usqp=CAU' />
      </div>
      <div className={s.post_message}>
      {props.message}  
      </div>
    </div>
  );
}