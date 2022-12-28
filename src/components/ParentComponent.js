import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childname)
    {
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }

  render() {
    return <div>
    <ChildComponent greet = {this.greetParent}/>
    </div>
  }
}

export default ParentComponent