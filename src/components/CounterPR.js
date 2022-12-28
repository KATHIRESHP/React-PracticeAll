import React, { Component } from 'react'

class CounterPR extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
  
      incrementCount = () => {
          this.setState(preState =>{
              return { count: preState.count + 1}
          })
      }
  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default CounterPR