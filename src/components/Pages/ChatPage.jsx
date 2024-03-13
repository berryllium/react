import { Button, Grid, List, ListItem, Paper, TextField } from '@mui/material';
import nanoId from 'nano-id';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Chat from '../Chat';

export default function ChatPage() {

  const { chatId } = useParams();
  const [chats, setChats] = useState([]);
  const [value, setValue] = useState('');
  

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setChats([...chats, { id: nanoId(), name: value, messages: [] }])
  }

  const addMessage = (chatId, message) => {
    const tmpChats =[...chats]
    const chatIndex = tmpChats.findIndex(el => el.id === chatId)
    if(chatIndex >= 0) {
      tmpChats[chatIndex].messages.push(message)
      setChats(() => tmpChats)
    }
    return tmpChats
  }

  if (!chatId) {
    return (
      <>
        <h1>ChatList</h1>
        <List sx={{display: 'flex', justifyContent: 'flex-start'}}>
          {chats.map((el) => (
            <ListItem sx={{flex: 0}}>
               <Paper elevation={3} style={{ padding: 10, marginBottom: 10 }}>
                <Button key={el.id} component={Link} to={'/chat/' + el.id}>{el.name}</Button>
              </Paper>
            </ListItem>
          ))}
        </List>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={9}>
              <TextField
                fullWidth
                label="Введите значение"
                variant="outlined"
                value={value}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <Button type="submit" variant="contained" color="primary">
                Create chat
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    )
  } else {
    const chat = chats.find(el => el.id === chatId)
    if(chat) {
      return <Chat addMessage={addMessage} chat={chat} />
    } else {
      return <h1>404</h1>
    }
  }

}
