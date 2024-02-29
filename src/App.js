import { useState } from 'react';
import './App.css';
import Message from './components/Message';
import Form from './components/Form';


function App() {
  const [messages, setMessages] = useState([])
  const addMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage])
  }

  return (
    <div className='p-5'>
      <Form addMessage={addMessage} />
      {messages.map((message, index) => <Message key={index} message={message}/>)}
    </div>
  )

}

export default App;
