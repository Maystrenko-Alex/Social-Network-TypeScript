import React from "react";
import { PostsDataType } from "../..";
import { MyPosts } from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  postsData: PostsDataType
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div className='content_wrapper'>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
}