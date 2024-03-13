import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProfilePage from './Pages/ProfilePage'
import { AppBar, Button, Container, Toolbar } from '@mui/material'
import ChatPage from './Pages/ChatPage'

export default function Header() {
  return (
    <AppBar>
        <Toolbar>
            <Button color="inherit" component={NavLink} to="/">Home</Button>
            <Button color="inherit" component={NavLink} to="/profile">Profile</Button>
            <Button color="inherit" component={NavLink} to="/chat">Chats</Button>
        </Toolbar>
    </AppBar>
  )
}