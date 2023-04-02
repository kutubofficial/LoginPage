import './Login.css'
import React from 'react'
const Login = ()=>{
    return(
        <div class="login-container">
        <h1>Login</h1>
        <div class="group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder= "Email.." required/>
        </div>
        <div class="group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password.." required/>
        </div>
        <button type="submit">Log in</button>
        <br/>
        Don't have an account? <a href='#'>Sign up</a>
        </div>
    )
}
export default Login;