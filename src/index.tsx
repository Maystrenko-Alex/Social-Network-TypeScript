import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

type PostType = {
  id: string,
  message: string,
  likesCount: number
}
export type PostsDataType = Array<PostType>

type DialogType = {
  id: string,
  name: string
}
export type DialogsDataType = Array<DialogType>

type MessageType = {
  id: string,
  message: string
}
export type MessagesDataType = Array<MessageType>

let postsData: PostsDataType = [
  { id: '1', message: 'How are you', likesCount: 1 },
  { id: '1', message: "It's my first post", likesCount: 1 },
  { id: '1', message: 'Yoo', likesCount: 1 },
  { id: '1', message: 'Yoo', likesCount: 1 },
]

let dialogsData: DialogsDataType = [
  { id: '1', name: 'Dimych' },
  { id: '2', name: 'Andrew' },
  { id: '3', name: 'Sveta' },
  { id: '4', name: 'Sasha' },
  { id: '5', name: 'Viktor' },
  { id: '6', name: 'Viktor' }
]

let messagesData: MessagesDataType = [
  { id: '1', message: 'Hi' },
  { id: '2', message: 'How are you?' },
  { id: '3', message: 'Yoo' },
  { id: '4', message: 'Yoo' },
  { id: '5', message: 'Yoo' }
]


ReactDOM.render(
  <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
   document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
