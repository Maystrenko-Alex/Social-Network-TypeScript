import React from "react";
import { PostsDataType } from "../../../redux/state";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

type MyPostsPropsType = {
  postsData: PostsDataType
}
export const MyPosts = (props: MyPostsPropsType) => {

  const postsDataElements = props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likesCount} />);
  const newPostRef = React.createRef<HTMLTextAreaElement>()
  
  const addPost = () => {
        if (newPostRef.current) {
      alert(newPostRef.current.value)
    }
    // if (newPostRef.current) {
    //     alert(newPostRef.current.value  ) // newPostRef.current?.value возможно не существует!!!
    // }
  }
  return (
    <div className={s.wrapper}>
      <h3>My post</h3>
      <div className={s.textarea_wrapper}>
        <textarea ref={newPostRef}></textarea>
        <button 
          className={s.btn_textarea}
          onClick={addPost}
          >Add post</button>
      </div>
      <div className={s.posts}>
        {postsDataElements}
      </div>
    </div>
  );
}