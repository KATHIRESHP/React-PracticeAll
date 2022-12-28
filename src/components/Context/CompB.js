import React, { Component } from 'react'
import CompC from './CompC'
import UserContext from './UserContext'

export class CompB extends Component {
  render() {
    return (
      <div>
       <h3>Comp E {this.context}</h3>
      <CompC/>
      </div>
    )
  }
}

CompB.contextType = UserContext

export default CompB