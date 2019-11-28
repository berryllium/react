import React from 'react'
import PropTypes from 'prop-types';
export default class Message extends React.Component {
  static propTypes = {
    mes: PropTypes.object.isRequired,
  }
  render() {
    return <div>
      <p><b>{this.props.mes.author}</b></p>
      <p>{this.props.mes.text}</p><br />
      </div>
  }
}