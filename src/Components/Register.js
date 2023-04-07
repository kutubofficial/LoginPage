import React from "react";
import { useState } from "react";
const Register = (props)=>{
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [allEntery, setAllEntry] = useState([]);


        const handleSubmit = event =>{
          event.preventDefault();
          const newEntry = {email: email, password: password};
          setAllEntry([...allEntery, newEntry]);
          console.log(newEntry);
          console.log(name);
          console.log(email);
          console.log(password);
        }
        const handleNameChange = (event) => {
          setName(event.target.value);
        }
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        }
        const handlePassChange = (event) => {
          setPassword(event.target.value);
        }

    return(
            <form onSubmit={handleSubmit}>
            <div className="registrr-container">
            <h1>Register Here..</h1>
        <div className="container">
          <label htmlFor="userName">Full Name</label>
          <input type="text" id="fullName" placeholder="Full Name" autoComplete='off'/>
        </div>
        <div className="container">
          <label htmlFor="userName">Enter UserName</label>
          <input type="text" value={name} onChange={handleNameChange} id="userName" placeholder="UserName.." autoComplete='off' />
        </div>
        <div className="container">
          <label htmlFor="email">Enter Email</label>
          <input type="email" value={email} onChange={handleEmailChange} id="email" placeholder=" Email.." autoComplete='off'/>
        </div>
        <div className="container">
          <label htmlFor="password">Enter Password</label>
          <input type="password" id="password" placeholder=" Password.." autoComplete='off'/>
        </div>
        <div className="container">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" value={password} onChange={handlePassChange} id="confi_password" placeholder="Confirm password" autoComplete='off'/>
        </div>
        <button type="submit">Create Account</button>
        <button onClick={()=> props.onFormSwich('login')}>Already have an account? Log in</button>
        </div>
        </form>
    )
}
export default Register;