import React, { Component } from 'react'
import '../CSS/MidText.css'

export class MidText extends Component {
  render() {
    const {text} = this.props
    return (
      <div className='midtext'>
        {text}
      </div>
    )
  }
}

export default MidText