import './App.css';
import Message from './components/Message';

function App() {
  let text = 'This is a message from App'
  return (
    <>
      <Message text={text}/>
    </>
  );
}

export default App;
