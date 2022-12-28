import React, { Component } from 'react'
import logo from '../Sources/logo.png';
import '../CSS/logo.css';

export class Logo extends Component {
  render() {
    return (
        <img src={logo}
        className='logoimg'
        />
    )
  }
}

export default Logo