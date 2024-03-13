import React, { useEffect } from 'react'
import MessageList from './MessageList';
import Form from './Form';

export default function Chat({ addMessage, chat }) {

    const onSendMessage = (message) => {
        addMessage(chat.id, message)
    }

    useEffect(() => {
        if (chat.messages.length && chat.messages[chat.messages.length - 1].author !== 'bot') {
            const timer = setTimeout(() => addMessage(chat.id, {
                text: 'This is bot\'s answer!',
                author: 'bot'
            }), 1500)
            return () => clearTimeout(timer);
        }
    }, [chat, addMessage])
    return (
        <>
            <h1>Chat { chat.name }</h1>
            <MessageList messages={chat.messages} />
            <Form onSendMessage={onSendMessage} />
        </>
    )
}
