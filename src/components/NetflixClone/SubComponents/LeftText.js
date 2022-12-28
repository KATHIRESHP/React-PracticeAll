import React, { Component } from 'react'
import '../CSS/LeftText.css'
import ProImage from './ProImage'
import SmallText from './SmallText'

export class LeftText extends Component {
  render() {
    const {large_text, small_text1, small_text2, small_text3, img} = this.props
    return (
      <div className='container'>
        <div className='text-container'>
            <div className='large-text'>{large_text}</div>
            <div className='small-text'><SmallText text={small_text1}/></div>
            <div className='small-text'><SmallText text={small_text2}/></div>
            <div className='small-text'><SmallText text={small_text3}/></div>
        </div>
        <div className='pro-image'>
                <ProImage/>
        </div>
      </div>
    )
  }
}

export default LeftText