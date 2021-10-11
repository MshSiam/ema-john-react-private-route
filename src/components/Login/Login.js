import React from "react"
import { Link, useLocation, useHistory } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import css from "./login.css"

const Login = () => {
  const { signinUsingGoogle } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect = location.state?.from || "/shop"
  // google sign up button handle
  const handleGoogleLogin = () => {
    signinUsingGoogle().then((result) => {
      history.push(redirect)
    })
  }
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
        <button onClick={handleGoogleLogin} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  )
}

export default Login
