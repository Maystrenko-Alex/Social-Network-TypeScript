import React from "react";
import s from './Header.module.css';

type PropsType = {
  
}

export const Header = (props: PropsType) => {
  return (
    <header className={s.header_wrapper}>
        <div>
          <img className={s.img_header} src='https://lh3.googleusercontent.com/proxy/cP-1D_ZVevCkN7fZ551Oo2iQ4h6MWaisRQlwnDLFIxc4Ckdb19F2zu02GgnUBA9Q0CN5gJNLSaj1BxdAd5N1DrE-pSXoO5AQJMjeG0-AWodTi0x5Yo1xnQ' ></img>
        </div>
        <div>
          <h2>Social Network</h2>
        </div>
      </header>
  );
}