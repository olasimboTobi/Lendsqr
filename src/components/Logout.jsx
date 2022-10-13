import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Logout.css"

function Logout() {

const navigate = useNavigate()
 const handleLogout =()=>{
    navigate("/")
 }
  return (
    <button className="logout" onClick={handleLogout}>
       Logout 
    </button>
  )
}

export default Logout