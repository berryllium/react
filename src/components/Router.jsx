import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ChatPage from '../pages/ChatPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'

export default function Router() {
  return (
    <Routes>
        <Route exact path='/' Component={HomePage}></Route>
        <Route exact path='/profile' Component={ProfilePage} />
        <Route exact path='/chat/:chatId?' Component={ChatPage} />
    </Routes>
  )
}
