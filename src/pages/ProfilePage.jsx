import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store/profile'

export default function ProfilePage() {
  const name = useSelector((state) => state.profile.name)
  const dispatch = useDispatch()

  const [newName, setNewName] = useState('')

  return (
    <>
      <h1>Profile</h1>
      <Box sx={{mb:2}}>
        <Typography>{name}</Typography>
        <TextField value={newName} onChange={(e) => setNewName(e.target.value)}></TextField>
      </Box>
      <Button variant='contained' onClick={() => dispatch(changeName(newName), setNewName(''))}>Change</Button>
    </>
  )
}
