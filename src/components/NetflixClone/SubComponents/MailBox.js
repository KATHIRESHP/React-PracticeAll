import React, { Component } from 'react'
import '../CSS/MailBox.css'

export class MailBox extends Component {
  render() {
    return (
            <input type="email" className='emailbox' placeholder='Email address' required></input>
    )
  }
}

export default MailBox