import { useEffect, useState } from 'react';
import Form from './components/Form';
import MessageList from './components/MessageList';
import { Container } from '@mui/material';


function App() {
  const [messages, setMessages] = useState([])
  const addMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage])
  }

  useEffect(() => {
    if(messages.length && messages[messages.length - 1].author !== 'bot') {
      const timer = setTimeout(() => addMessage({
        text: 'This is bot\'s answer!',
        author: 'bot'
      }), 1500)
      return () => clearTimeout(timer);
    }
  }, [messages])

  return (
    <Container>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </Container>
  )

}

export default App;
