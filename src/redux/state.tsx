type PostType = {
  id: string,
  message: string,
  likesCount: number
}
type DialogType = {
  id: string,
  name: string
}
type MessageType = {
  id: string,
  message: string
}
export type FrendType = {
  id: string,
  name: string,
  ava: string
}
export type FriendsType = Array<FrendType>


export type PostsDataType = Array<PostType>
export type DialogsDataType = Array<DialogType>
export type MessagesDataType = Array<MessageType>
export type SidebarType = {
  friends: Array<FriendsType>
}

type ProfilePageType = {
  postsData: PostsDataType
}
type MessagePageType = {
  dialogsData: DialogsDataType,
  messagesData: MessagesDataType
}

export type AppStateType = {
  profilePage: ProfilePageType,
  messagesPage: MessagePageType,
  sidebar: SidebarType
}

let appState = {
  profilePage: {
    postsData: [
      { id: '1', message: 'How are you?', likesCount: 1 },
      { id: '1', message: "It's my first post", likesCount: 1 },
      { id: '1', message: 'Yoo', likesCount: 1 },
      { id: '1', message: 'Yoo', likesCount: 1 }
    ]
  },
  messagePage: {
    dialogsData: [
      { id: '1', name: 'Dimych' },
      { id: '2', name: 'Andrew' },
      { id: '3', name: 'Sveta' },
      { id: '4', name: 'Sasha' },
      { id: '5', name: 'Viktor' },
      { id: '6', name: 'Viktor' }
    ],
    messagesData: [
      { id: '1', message: 'Hi' },
      { id: '2', message: 'How are you?' },
      { id: '3', message: 'Yoo' },
      { id: '4', message: 'Yoo' },
      { id: '5', message: 'Yoo' }
    ]
  },
  sidebar: {
    friends: [
      {id: '1', name: 'Andrew', ava: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'},
      {id: '2', name: 'Sasha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e5DlsOkJ8OWU-8WCb30W6_oNXo12sCwpHQ&usqp=CAU'},
      {id: '3', name: 'Sveta', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzGBydv0evnLzL0WUe6_lfqp7cE_qlWM5vw&usqp=CAU'}
    ]
  }
}

export default appState;

