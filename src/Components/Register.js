// import './Registor.css'
const Register = ()=>{
    return(
        <div>
            <div class="registrr-container">
            <h1>Registor</h1>
        <div class="container">
          <label for="userName">Full Name</label>
          <input type="text" id="userName" placeholder="Full Name" required/>
        </div>
        <div class="container">
          <label for="userName">Enter UserName</label>
          <input type="text" id="userName" placeholder="User Name" required/>
        </div>
        <div class="container">
          <label for="email">Enter Email</label>
          <input type="email" id="email" placeholder=" Email address" required/>
        </div>
        <div class="container">
          <label for="password">Enter Password</label>
          <input type="password" id="password" placeholder=" password" required/>
        </div>
        <div class="container">
          <label for="password">Confirm Password</label>
          <input type="password" id="password" placeholder="Confirm password" required/>
        </div>
        <button type="submit">Create Account</button>
        <br/>
        Already have an account? <a href='#'>Log in</a>
        </div>
        </div>
    )
}
export default Register;