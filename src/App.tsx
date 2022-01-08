import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DialogsDataType, MessagesDataType, PostsDataType } from '.';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';

type AppPropsType = {
  postsData: PostsDataType,
  dialogsData: DialogsDataType,
  messagesData: MessagesDataType
}

function App(props: AppPropsType) {

  return (
    <BrowserRouter >
      < div className='app_wrapper'>
        <Header />
        <div className='app_content'>
          <Navbar />
          <div className='content_wrapper'>
            <Routes>
              <Route path='/profile' element={<Profile postsData={props.postsData} />} />
              <Route
                path='/dialogs'
                element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
