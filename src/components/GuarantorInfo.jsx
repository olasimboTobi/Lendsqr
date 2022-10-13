import React from 'react'
import "./GuarantorInfo.css"

function GuarantorInfo({firstName, lastName, phone, address}) {
  return (
    <div className="guarantorInfo">
        <h2>Guarantor</h2>
        <div className="info">
            <div className="guarantor--name">
                <h3>FULL NAME</h3>
                <h2>{firstName} {lastName}</h2>
            </div>
            <div className="guarantor--name">
                <h3>PHONE NUMBER</h3>
                <h2>{phone}</h2>
            </div>
            <div className="guarantor--name">
                <h3>ADDRESS</h3>
                <h2>{address} </h2>
            </div>
            <div className="guarantor--name">
                <h3>RELATIONSHIP</h3>
                <h2>Sister</h2>
            </div>
    
        </div>
    </div>
  )
}

export default GuarantorInfo