import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    let className = props.p ? 'primary' : ''
  return (
    <div>
    <h1 className = {`${className} secondary`}>Styling...</h1>
    </div>
  )
}

export default StyleSheet