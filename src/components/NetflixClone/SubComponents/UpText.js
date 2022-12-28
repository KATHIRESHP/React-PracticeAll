import React, { Component } from 'react'
import '../CSS/UpText.css'

class UpText extends Component {
  render() {
    const { text } = this.props
    return (
      <div className='uptext'>
        {text}
      </div>
    )
  }
}

export default UpText