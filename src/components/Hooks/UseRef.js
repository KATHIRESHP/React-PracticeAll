import React, { useRef } from 'react'

function UseRef() {

    const userNameRef = useRef(null);
    const passwordRef = useRef(null)

    const onClick =() =>
    {
        console.log("Username: " ,userNameRef.current.value, "\nPassword: ", passwordRef.current.value);
        //Accessing Values using references
        userNameRef.current.value = "";
        passwordRef.current.value = "";
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder="Username" ref={userNameRef} /><br></br>
        <input type="password" placeholder="*Enter the Password*" ref={passwordRef} /><br></br>
        <button onClick={onClick}>Submit</button>
    </div>
  )
}

export default UseRef