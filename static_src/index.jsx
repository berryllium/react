import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];
function addMessage() {
   messages.push('Нормально')
   ReactDOM.render(
      <Chat messages={messages} />,
      document.getElementById('root'),
   );
}

const SendButton = () => <button onClick={addMessage}>Отправить</button>
const MessageComponent = (props) => <div>{props.text}</div>;
const MessageField = (props) => props.messages.map(message => <MessageComponent text={message} />);
const Chat = (props) =>
   <div>
      <MessageField messages={props.messages} />
      <SendButton />
   </div>

ReactDOM.render(
   <Chat messages={messages} />,
   document.getElementById('root'),
);