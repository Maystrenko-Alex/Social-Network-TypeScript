import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={s.wrapper}>
        <h3>My post</h3>
        <div className={s.textarea_wrapper}>
          <textarea></textarea>
          <button className={s.btn_textarea}>Add post</button>
        </div>
        <div className={s.posts}>          
          <Post message='How are you' likeCount={1}/>
          <Post message="It\'s my first post" likeCount={13}/>
          <Post message='Yoo' likeCount={7}/>
        </div>
      </div>
  );
}