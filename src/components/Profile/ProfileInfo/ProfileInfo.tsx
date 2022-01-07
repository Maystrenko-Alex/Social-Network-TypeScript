import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.content_img} src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg" alt='' />
      </div>
      <div  className={s.description}>
        Ava + description
      </div>
    </div>
  );
}