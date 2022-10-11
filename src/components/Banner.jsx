import React from 'react'
import "./Banner.css"
import Group from "../download/Group.svg"

function Banner() {
  return (
    <div className="banner">
      <img src={Group} className="banner-image"/>
    </div>
  )
}

export default Banner