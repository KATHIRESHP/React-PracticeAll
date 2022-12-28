import React, { Component } from 'react'
import './Login_Page.css'

class LoginPage extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: ''
      }
      this.ref = React.createRef()
    }

    onChangeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }

    componentDidMount(){
        this.ref.current.focus()
    }

  render() {
    const {username, password} = this.state
    return (
      <div className='container'>
      <div className='inputContainerOut'>
        <div className='signin'><h4 className='signintxt'>Sign in</h4></div>
        <form onSubmit={this.submitHandler}>
            <div className='inputContainerIn'>
            <div className='inputContainer'>
             <h4 className='useridtxt'>User Id</h4>
                <input  
                    ref={this.ref}
                    className='inputField'
                    type='text'
                    value={username}
                    name='username'
                    onChange={this.onChangeHandler}
                    placeholder='User name...'
                    required
                />
            </div>
            <div className='inputContainer'>
              <h4 className='passwordtxt'>Password</h4>
                <input
                    className='inputField'
                    type='password'
                    value={password}
                    name='password'
                    onChange={this.onChangeHandler}
                    placeholder='password'
                    required
                />
            </div>
            <button 
                type='submit'
                className='submitButton'
            >Sign in</button>
            <div className='signupPage'><a className='createacctxt' href=''>Create account?</a></div>
            </div>
        </form>
      </div>
      </div>
    )
  }
}

export default LoginPage