import './Login.css'
import React, { useState } from 'react'
const Login = (props)=>{

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = event =>{
          event.preventDefault();
          console.log(email);
          console.log(password);
          
        }
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        }
        const handlePassChange = (event) => {
          setPassword(event.target.value);
        }

    return(
      <form onSubmit={handleSubmit}>
        <div className="login-container">
        <h1>Login</h1>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={handleEmailChange} value={email} id="log_email" placeholder= "Email.." autoComplete='off' required/>
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input type="password"value={password} onChange={handlePassChange} id="log_password" placeholder="Password.." autoComplete='off' required/>
        </div>
        <button type="submit">Log in</button>
        <button onClick={()=> props.onFormSwich('register')} >Don't have an account? Sign up</button>
        </div>
        </form>
    )
}
export default Login;