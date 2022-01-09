import React from "react";
import s from './Header.module.css';

type PropsType = {
  
}

export const Header = (props: PropsType) => {
  return (
    <header className={s.header_wrapper}>
        <div>
          <img 
            className={s.img_header} alt='#'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaWWPMcu4bdOriK1FmAQUvka1QTJ_KxaI4Q&usqp=CAU' ></img>
        </div>
        <div className={s.header_title}>
          <h2>Social Network</h2>
        </div>
      </header>
  );
}