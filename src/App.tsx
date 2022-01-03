import React from 'react';
import './App.css';
const img_header = 'https://lh3.googleusercontent.com/proxy/cP-1D_ZVevCkN7fZ551Oo2iQ4h6MWaisRQlwnDLFIxc4Ckdb19F2zu02GgnUBA9Q0CN5gJNLSaj1BxdAd5N1DrE-pSXoO5AQJMjeG0-AWodTi0x5Yo1xnQ';

function App() {
  return (
    < div className='app-wrapper'>
      <header className='header-wrapper'>
        <div>
          <img className='img_header' src={img_header} ></img>
        </div>
        <div>
          <h2>Social Network</h2>
        </div>
      </header>
      <div className='app-content'>
        <nav className='navbar-wrapper'>
          <div>Profile</div>
          <div>Message</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
        </nav>
        <div className='content-wrapper'>
          <div>
            <img  className='content_img' src='https://lh3.googleusercontent.com/proxy/T6n7Tyd7Xh6MNfA1zapqlrwefhNQHgpXL6kOXJ3KxiJydyLib5fY0WtjyGcv769I_r5zifcBM5hiLEjnnzBvdRh7EOxBBZ02WPWrjo5a' alt='' />
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
      </div>
      <div className='footer'>Footer</div>
    </div>
  );
}

export default App;
