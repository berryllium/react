import React from 'react'
import Message from './Meessage'
export default class MessageField extends React.Component {
  state = {
    counter: 0,
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
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      messages: [...this.state.messages, { author: 'user2', text: 'А у меня - нет!' }]
    }
    )
    console.log(this.state.counter)
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
    return <div>
      {messageElements}
      <button onClick={this.handleClick}>Отправить сообщение</button>
    </div>
  }
}