import { Box, Button, List, ListItemButton, Paper, TextField, Typography } from '@mui/material';
import nanoId from 'nano-id';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Chat from '../components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../store/chats';

export default function ChatPage() {

  const { chatId } = useParams();
  const chats = useSelector((state) => state.chats)

  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat({ id: nanoId(), name: value, messages: [] }))
    setValue('')
  }

  if (!chatId) {
    return (
      <>
        <h1>ChatList</h1>
        <Box sx={{ my: 3}}>
          <form onSubmit={handleSubmit} sx={{mb:5}}>
            <TextField size='small' label="Type chat name" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
            <Button variant="contained" type="submit" sx={{ml:2}}>Create</Button>
          </form>
        </Box>
        {chats.length > 0 && 
        <List component={Paper}>
          {chats.map((el) => (
              <ListItemButton key={el.id} component={Link} to={'/chat/' + el.id}>
               <Typography>{el.name}</Typography>
              </ListItemButton>
          ))}
        </List>}
      </>
    )
  } else {
    const chat = chats.find(el => el.id === chatId)
    if(chat) {
      return <Chat chat={chat} />
    } else {
      return <h1>404</h1>
    }
  }

}
