import React from 'react'
import Button from './Button'
import './Login.css'

function Login() {
    return(
        <div >
        <h2>Login</h2>
       <h3>Username</h3>
       <input className="txt" type="text" placeholder="Enter Username" name="uname" required></input>
       <h3>Password</h3>
       <input className="pwd" type="password" placeholder="Enter Password" name="psw" required></input><br></br>
    
      <Button/>
        </div>
    )
}

export default Login;