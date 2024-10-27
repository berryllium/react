import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile'
import chatReducer from './chats'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
})

