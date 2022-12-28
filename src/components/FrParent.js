import React, { Component } from 'react'
import FrChild from './FrChild'
export class FrParent extends Component {

    constructor(props) {
      super(props)
      this.Frref = React.createRef()
    }

    clickHandler = () =>{
        this.Frref.current.focus()
    }

  render() {
    return (
      <div>
        <FrChild ref={this.Frref} />
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default FrParent