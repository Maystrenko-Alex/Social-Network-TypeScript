import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';


type PostType = {
  id: string,
  message: string,
  likesCount: number
}
export type PostsDataType = Array<PostType>

let postsData: PostsDataType = [
  {id: '1', message: 'How are you', likesCount: 1},
  {id: '1', message: "It's my first post" , likesCount: 1},
  {id: '1', message: 'Yoo', likesCount: 1},
  {id: '1', message: 'Yoo', likesCount: 1},
]
function App() {
  return (
    <BrowserRouter >
      < div className='app_wrapper'>
        <Header />
        <div className='app_content'>
          <Navbar />
          <div className='content_wrapper'>
            <Routes>
              <Route path='/profile' element={<Profile postsData={postsData} />} />
              <Route path='/dialogs' element={<Dialogs />} />
            </Routes>
          </div>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
