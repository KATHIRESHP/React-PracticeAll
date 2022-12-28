import React, { Component } from 'react'

class Usergreet extends Component {
    
constructor(props) {
  super(props)

  this.state = {
     isloggedin: true
  }
}

  render() {
    return this.state.isloggedin && <div>Good Evening, King Kathir</div>
  }
}

export default Usergreet