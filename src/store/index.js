import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile'
import chatReducer from './chats'

export default configureStore({
  reducer: {
    profile: profileReducer,
    chats: chatReducer,
  },
})

