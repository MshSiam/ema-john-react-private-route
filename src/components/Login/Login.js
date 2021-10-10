import React from "react"
import { Link } from "react-router-dom"
import css from "./login.css"

const Login = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="your email" />
          <br />
          <input type="password" name="" id="" placeholder="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>
          New to Ema john? <Link to="/register">Create Account</Link>
        </p>
        <div>---------Or---------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  )
}

export default Login
