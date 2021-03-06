import React from "react";
import { PostsDataType } from "../../redux/state";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  posts: PostsDataType
  addPost: (postMessage: string) => void
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div className='content_wrapper'>
      <ProfileInfo />
      <MyPosts postsData={props.posts} addPost={props.addPost}/>
    </div>
  );
}