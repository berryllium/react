import React, { useEffect } from 'react'
import MessageList from './MessageList';
import Form from './Form';


export default function Chat({ chat }) {
    return (
        <>
            <h1>Chat {chat.name}</h1>
            <MessageList messages={chat.messages} />
            <Form chatId={chat.id} />
        </>
    )
}
