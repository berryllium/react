import React from 'react'
import Message from './Message'
import { Box } from '@mui/material'

export default function MessageList({messages}) {
    
  return  (
    <Box style={{'marginBottom': '30px'}}>
         {messages.map((message, index) => <Message key={index} message={message}/>)}
    </Box>
  )
}
