import React, { useEffect } from 'react'
import MessageList from './MessageList';
import Form from './Form';
import { addMessage } from '../store/chats';
import { useDispatch } from 'react-redux';


export default function Chat({ chat }) {
    const dispatch = useDispatch()
    useEffect(() => {
        if (chat.messages.length && chat.messages[chat.messages.length - 1].author !== 'bot') {
            const timer = setTimeout(() => dispatch(addMessage({chatId: chat.id, message: {
                text: 'This is bot\'s answer!',
                author: 'bot'
        }})), 1500)
            return () => clearTimeout(timer);
        }
    }, [chat, dispatch])
    return (
        <>
            <h1>Chat { chat.name }</h1>
            <MessageList messages={chat.messages} />
            <Form chatId={chat.id}/>
        </>
    )
}
