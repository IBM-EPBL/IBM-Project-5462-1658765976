import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/Signup"
import Dashboard from "./components/Dashboard"
import "bootstrap/dist/css/bootstrap.min.css"
import { UserAuthContextProvider } from "./context/UserAuthContext"
function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </Router>
  )
}

export default App
