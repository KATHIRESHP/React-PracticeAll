import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg: 'Hello'
      }
    }
    clickHandler = () =>{
        this.setState({
            msg: 'Good Bye'
        })
    }
  render() {
    return (
      <div>
      {this.state.msg}
      <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Eventbind