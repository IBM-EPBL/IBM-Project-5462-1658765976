import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from "react-bootstrap"
import GoogleButton from "react-google-button"
import { useUserAuth } from "../../context/UserAuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const { user, login, signInWithGoogle } = useUserAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) navigate("/dashboard")
  }, [])

  const loginUser = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (err) {
      setError(err.message)
    }
  }
  const checkLogedIn = () => {
    if (user) navigate("/dashboard")
  }
  return (
    <div className="main" onLoad={checkLogedIn()}>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form" onSubmit={loginUser}>
        <h3>Login Here</h3>
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

        <button className="button">Log In</button>
        <GoogleButton className="m-auto my-3" onClick={signInWithGoogle} />
        <div className="text-center p-1 m-auto m-1 ">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
