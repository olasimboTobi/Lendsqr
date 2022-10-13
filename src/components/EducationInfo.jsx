import React from 'react'
import "./Educationinfo.css"

function EducationInfo({level, status, sector, duration, office_email, monthly_income, loan_repayment}) {
  return (
    <div className="personalInfo">
        <h2>Education and Employment</h2>
        <div className="info">
            <div className="education--name">
                <h3>LEVEL OF EDUCATION</h3>
                <h2>{level}</h2>
            </div>
            <div className="education--name">
                <h3>EMPLOYMENT STATUS</h3>
                <h2>{status}</h2>
            </div>
            <div className="education--name">
                <h3>SECTOR OF EMPLOYMENT</h3>
                <h2>{sector}</h2>
            </div>
            <div className="education--name">
                <h3>DURATION OF EMPLOYMENT</h3>
                <h2>{duration}</h2>
            </div>
            <div className="education--name">
                <h3>OFFICE EMAIL</h3>
                <h2>{office_email}</h2>
            </div>
            <div className="education--name">
                <h3>MONTHLY INCOME</h3>
                <h2>{monthly_income}</h2>
            </div>
            <div className="education--name">
                <h3>LOAN REPAYMENT</h3>
                <h2>{loan_repayment}</h2>
            </div>
    
        </div>
    </div>
  )
}

export default EducationInfo