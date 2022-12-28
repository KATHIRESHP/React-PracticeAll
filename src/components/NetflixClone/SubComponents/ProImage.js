import React, { Component } from 'react'
import '../CSS/ProImage.css'

export class ProImage extends Component {
  render() {
    return (
      <div className='video-container'>
        <video className='video1' controls>
        <source src='./Sources/video.mp4' type='video/mp4'/>
        </video>
      </div>
    )
  }
}

export default ProImage