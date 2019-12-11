import React from 'react'
import PropTypes from 'prop-types';
export default class Message extends React.Component {
  static propTypes = {
    mes: PropTypes.object.isRequired,
  }
  render() {
    return <div className="message">
      <p className="message-sender"><b>{this.props.mes.author}</b></p>
      <p>{this.props.mes.text}</p><br />
      </div>
  }
}