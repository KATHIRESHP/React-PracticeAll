import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    increment()
    {
        // this.setState(
        //     {
        //     count: this.state.count + 1 
        // }, 
        // () => {
        //     console.log('CallBack Value: ',this.state.count)
        // }
        // )
        // console.log(this.state.count)
        this.setState(ps => ({
            count: ps.count + 1
        }))
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
      Count - {this.state.count}
      <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter