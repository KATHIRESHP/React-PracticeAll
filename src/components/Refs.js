import React, { Component } from 'react'
import Input from './Input'
class Refs extends Component {

constructor(props) {
  super(props)
  this.compref = React.createRef()

}

clickHandler = () =>{
  this.compref.current.focusInput()
}

  render() {
    return (
      <div>
        <Input ref={this.compref}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Refs