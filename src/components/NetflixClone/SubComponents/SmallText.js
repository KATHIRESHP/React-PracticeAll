import React, { Component } from 'react'
import '../CSS/SmallText.css'

export class SmallText extends Component {
  render() {
    const {text} = this.props
    return (
      <div className='min-text-container'>
        <div className='text'> {text}</div>
      </div>
    )
  }
}

export default SmallText