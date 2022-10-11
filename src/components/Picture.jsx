import React from 'react'
import Image from "../download/pablo-sign-in 1.svg"
import "./Picture.css"

function Picture() {
  return (
    <div className="picture">
       <img src={Image} className="picture--image"/>
    </div>
  )
}

export default Picture