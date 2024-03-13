import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProfilePage from './Pages/ProfilePage'
import { AppBar, Button, Container, Toolbar } from '@mui/material'
import ChatPage from './Pages/ChatPage'

export default function Header() {
  return (
    <AppBar>
        <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
            <Button color="inherit" component={Link} to="/chat">Chats</Button>
        </Toolbar>
    </AppBar>
  )
}
