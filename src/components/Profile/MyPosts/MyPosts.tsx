import React from "react";
import { PostsDataType } from "../../..";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

type MyPostsPropsType = {
  postsData: PostsDataType
}

export const MyPosts = (props: MyPostsPropsType) => {

  const postsDataElements = props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likesCount} />);

  return (
    <div className={s.wrapper}>
      <h3>My post</h3>
      <div className={s.textarea_wrapper}>
        <textarea></textarea>
        <button className={s.btn_textarea}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsDataElements}
      </div>
    </div>
  );
}