import React from 'react'
import MessageField from './MessageField'
export default class App extends React.Component {
  state = {
    text: 'test'
  }
  render() {
    return <MessageField />
  }
}