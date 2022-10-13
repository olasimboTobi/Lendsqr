import React from 'react'
import UserHeader from "../components/UserHeader"
import Sidebar from '../components/Sidebar'
import UserBody from '../components/UserBody'
import "./User.css"


function User() {
  
  return (
    <div className="users--container">
      <div className="users--header">
       <UserHeader/>
      </div>
      <div className="users--content">
        <Sidebar/>
        <div className="users--body--detail">
          <UserBody /> 
        </div>
       
      </div>
      
      
      
    </div>
  )
}

export default User