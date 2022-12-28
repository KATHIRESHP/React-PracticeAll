import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Kathirq"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Kathir'
            })
        },
        2000
        )
    }
  render() {
    console.log(`${this.state.name} "parent"`)
    return (
      <div>
        <h1>Parent Component</h1>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp