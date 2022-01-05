import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={s.content_wrapper}>
      <div>
        <img className={s.content_img} src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg" alt='' />
      </div>
      <div>
        Ava + description
      </div>
      <MyPosts />
    </div>
  );
}