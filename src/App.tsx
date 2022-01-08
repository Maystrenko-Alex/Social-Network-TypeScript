import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import appState from './redux/state';


function App() {
  let posts = appState.profilePage.postsData;
  let dialogs = appState.messagePage.dialogsData;
  let messages = appState.messagePage.messagesData;
  let friendsData = appState.sidebar.friends
  return (
    <BrowserRouter >
      < div className='app_wrapper'>
        <Header />
        <div className='app_content'>
          <Navbar friends={friendsData}/>
          <div className='content_wrapper'>
            <Routes>
              <Route path='/profile' element={<Profile posts={posts} />} />
              <Route
                path='/dialogs'
                element={<Dialogs dialogs={dialogs} 
                                  messages={messages} />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
