import React from 'react'
import Message from './Message'
import '../styles/styles.css'
export default class MessageField extends React.Component {
  state = {
    counter: 0,
    input: '',
    messages: [
      {
        author: 'admin',
        text: 'Привет! Как дела?'
      },
      {
        author: 'user',
        text: 'Привет! У меня отлично!'
      }
    ]
  }
  handleClick = (text) => {
    this.setState({
      counter: this.state.counter + 1,
      messages: [...this.state.messages, { author: 'user2', text: text }]
    }
    )
    console.log(this.state.counter)
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
      this.sendMessage(message)
    }
  }

  sendMessage = (message) => {
    this.setState({ messages: [...this.state.messages, { text: message, sender: 'me' }] });
  }
  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1,
          messages: [...this.state.messages, { author: 'bot', text: 'Все так говорят, а ты купи слона!' }]
        });
      }
    }, 1500)
  }
  render() {
    let rand = Math.random()
    const messageElements = this.state.messages.map((mes, index) =>
      <Message key={rand * index} mes={mes} />)
    return <div className="layout">
      <div className="message-field">
        {messageElements}
      </div>
      <input type="text"
      style = { { fontSize : '22px' } }
      onChange = { this . handleChange }
      onKeyUp = { (event) => this . handleKeyUp (event , this . state . input ) }
      />
      <button onClick={() => this.handleClick(this.state.input)}>Отправить сообщение</button>
    </div>
  }
}