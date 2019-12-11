import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
      <MuiThemeProvider>
      <MessageField messages={props.messages} />
      </MuiThemeProvider>
   </div>

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);