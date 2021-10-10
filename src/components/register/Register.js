import React from "react"
import { Link } from "react-router-dom"
import useFirebase from "../../hooks/useFirebase"

const Register = () => {
  const { signinUsingGoogle, signout } = useFirebase()
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form action="" onSubmit>
          <input type="email" name="" id="" placeholder="Your email" />
          <br />
          <input type="password" name="" id="" placeholder="password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-entered Password"
          />
          <br />
          <input type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <button className="btn-regular">Google Sign Up</button>
      </div>
    </div>
  )
}

export default Register
