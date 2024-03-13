import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProfilePage from './Pages/ProfilePage'
import ChatPage from './Pages/ChatPage'

export default function Router() {
  return (
    <Routes>
        <Route exact path='/' Component={HomePage}></Route>
        <Route exact path='/profile' Component={ProfilePage} />
        <Route exact path='/chat/:chatId?' Component={ChatPage} />
    </Routes>
  )
}
