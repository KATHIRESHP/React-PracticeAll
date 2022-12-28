import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         topic:''
      }
    }
    changeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handletopic = event =>
    {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>
    {
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <input
             type = "text"
             value={this.state.username}
             onChange={this.changeHandler}
             >
             </input>
             <div>
             <select value={this.state.topic} onChange={this.handletopic}>
                <option value='java'>Java</option>
                <option value='python'>py</option>
                <option value='js'>Js</option>
             </select>
             </div>
             <div>
                <button type='submit'>Submit</button>
             </div>
        </div>
      </form>
    )
  }
}

export default Form