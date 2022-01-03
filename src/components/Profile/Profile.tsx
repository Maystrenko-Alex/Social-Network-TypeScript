import React from "react";
import s from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={s.content_wrapper}>
      <div>
        <img className={s.content_img} src='https://lh3.googleusercontent.com/proxy/T6n7Tyd7Xh6MNfA1zapqlrwefhNQHgpXL6kOXJ3KxiJydyLib5fY0WtjyGcv769I_r5zifcBM5hiLEjnnzBvdRh7EOxBBZ02WPWrjo5a' alt='' />
      </div>
      <div>
        Ava + description
      </div>
      <div>
        My post
        <div>
          New post
          <input type='text' />
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </div>
  );
}