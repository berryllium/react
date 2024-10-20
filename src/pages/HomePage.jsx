import { Divider, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <List>
        <ListItem component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItem>
        <Divider />
        <ListItem component={Link} to="/chat">
          <ListItemText primary="Chat" />
        </ListItem>
        <Divider />
        <Divider />
      </List>
    </>
  )
}
