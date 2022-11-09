import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from "react-bootstrap"
import GoogleButton from "react-google-button"
import { useUserAuth } from "../../context/UserAuthContext"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const { user, signUp, signInWithGoogle } = useUserAuth()
  const navigate = useNavigate()
  const createUser = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUp(email, password)
    } catch (err) {
      setError(err.message)
    }
  }
  const checkUserCreated = () => {
    if (user) navigate("/dashboard")
  }
  return (
    <div className="main" onLoad={checkUserCreated()}>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form" onSubmit={createUser}>
        <h3>SignUp Here</h3>
        {error && <Alert variant="danger">{error}</Alert>}

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button">Sign Up</button>
        <GoogleButton className="m-auto my-3" onClick={signInWithGoogle} />
        <div className="text-center p-1 m-auto m-1 ">
          Already have an account? <Link to="/">Log In</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
