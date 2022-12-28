import React, { Component } from 'react'
import '../CSS/LowText.css'

export class LowText extends Component {
  render() {
    const {text} = this.props
    return (
      <div className='lowtext'>
        {text}
      </div>
    )
  }
}

export default LowText