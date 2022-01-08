import React from "react";
import s from './Post.module.css';

type PostPropsType = {
  id: string
  message: string
  likeCount: number
}

export const Post = (props: PostPropsType) => {
  return (
    <div id={props.id} className={s.post_wrapper}>
      <div className={s.post_ava}>
        <img
          alt='images'
          className={s.ava}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQVSCDGGBYnXn3uTmCvnziuvAE_MS0Zk9dg&usqp=CAU" />
      </div>
      <div className={s.post_message}>
        {props.message}
      </div>
      <div className={s.like}>
        <img
          alt='images'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsdcSsic7zbHMs3pjjVj8xpjJ-pJ_36PDHvCVd61cvf-oZNpSmJBOXK2fL149m3ByEsw&usqp=CAU" />
        {props.likeCount}
      </div>
    </div>
  );
}