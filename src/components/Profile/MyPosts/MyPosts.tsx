import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>          
          <Post message='How are you'/>
          <Post message='Hey'/>
          <Post message='Yoo' />
        </div>
      </div>
  );
}