import React from "react";
import s from './Header.module.css';

type PropsType = {
  
}

export const Header = (props: PropsType) => {
  return (
    <header className={s.header_wrapper}>
        <div>
          <img className={s.img_header} src='https://lh3.googleusercontent.com/proxy/bEEU63dJxHGfVjU4NcuNKyQhHHv2U7pyqDd9VQmCv77CecrwG5VUiXdkij1VI6z2vX_yS5qi_OF-CoK4npKH6eWFD8VZUslFpseJ7vF5j0ogbXIjQzOKlg' ></img>
        </div>
        <div className={s.header_title}>
          <h2>Social Network</h2>
        </div>
      </header>
  );
}