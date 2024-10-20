import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Box, Button, Switch, Toolbar, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import FaceIcon from '@mui/icons-material/Face';

export default function Header({switchDarkMode}) {

  return (
    <AppBar>
        <Toolbar>
            <Button color="inherit" component={NavLink} to="/">Home</Button>
            <Button color="inherit" component={NavLink} to="/profile">Profile</Button>
            <Button color="inherit" component={NavLink} to="/chat">Chats</Button>
            <Switch checked={useTheme().palette.darkMode} onChange={switchDarkMode} />
            <FaceIcon sx={{mr:1, ml:3}}></FaceIcon>
            <Typography>{useSelector((state) => state.profile.name)}</Typography>
            
        </Toolbar>
    </AppBar>
  )
}