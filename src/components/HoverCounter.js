import React, { Component } from 'react'
import withCounter from './ClickCounterHOC'


class HoverCounter extends Component {
  render() {

    const {count, incrementCount} = this.props

    return (
      <div>
      <h1 onClick={incrementCount}> 
      {this.props.name} have hovered {count} times
      </h1>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 5)