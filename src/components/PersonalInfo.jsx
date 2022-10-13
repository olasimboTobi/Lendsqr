import React from 'react'
import "./PersonalInfo.css"

function PersonalInfo({firstName, lastName,phone,email,bvn,address}) {
  return (
    <div className="personalInfo">
        <h2>Personal Information</h2>
        <div className="info">
            <div className="personal--name">
                <h3>FULL NAME</h3>
                <h2>{firstName} {lastName}</h2>
            </div>
            <div className="personal--name">
                <h3>PHONE NUMBER</h3>
                <h2>{phone}</h2>
            </div>
            <div className="personal--name">
                <h3>EMAIL ADDRESS</h3>
                <h2>{email}</h2>
            </div>
            <div className="personal--name">
                <h3>BVN</h3>
                <h2>{bvn}</h2>
            </div>
            <div className="personal--name">
                <h3>MARITAL STATUS</h3>
                <h2>Single</h2>
            </div>
            <div className="personal--name">
                <h3>CHILDREN</h3>
                <h2>None</h2>
            </div>
            <div className="personal--name">
                <h3>TYPE OF RESIDENCE</h3>
                <h2>{address}</h2>
            </div>
    
        </div>
        
    </div>
  )
}

export default PersonalInfo