import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../../context/UserAuthContext"

const ServiceRequest = () => {
  const navigate = useNavigate()
  const { user } = useUserAuth()

  const checkEmailVerified = () => {
    if (!user) navigate("/")
  }
  const requestService = () => {
    navigate("/requested")
  }
  return (
    <div className="main" onLoad={checkEmailVerified()}>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form ">
        <div
          style={{
            textAlign: "center",
            veritcalAlign: "center",
            paddingTop: "25%",
            color: "white",
            fontWeight: "900",
            fontSize: "2rem",
          }}
        >
          <div className="button" onClick={requestService}>
            Request For Service
          </div>
          <div className="button" onClick={requestService}>
            Request Scaling
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceRequest
