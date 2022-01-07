import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
type PostType = {
  id: string,
  message: string,
  likesCount: number
}
type PostsDataType = Array<PostType>

export const MyPosts = () => {
  let postsData: PostsDataType = [
    {id: '1', message: 'How are you', likesCount: 1},
    {id: '1', message: "It's my first post" , likesCount: 1},
    {id: '1', message: 'Yoo', likesCount: 1},
    {id: '1', message: 'Yoo', likesCount: 1},
  ]

  const postsDataJSX = postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likesCount} /> );
  return (
    <div className={s.wrapper}>
        <h3>My post</h3>
        <div className={s.textarea_wrapper}>
          <textarea></textarea>
          <button className={s.btn_textarea}>Add post</button>
        </div>
        <div className={s.posts}> 
        {postsDataJSX}         
          {/* <Post message='How are you' likeCount={1}/>
          <Post message="It\'s my first post" likeCount={13}/>
          <Post message='Yoo' likeCount={7}/> */}
        </div>
      </div>
  );
}