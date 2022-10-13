import React from 'react'
import "./SocialsInfo.css"

function SocialsInfo({twitter, facebook, instagram}) {
  return (
    <div className="socialsInfo">
        <h2>Socials</h2>
        <div className="info">
            <div className="socials--name">
                <h3>TWITTER</h3>
                <h2>{twitter}</h2>
            </div>
            <div className="socials--name">
                <h3>FACEBOOK</h3>
                <h2>{facebook}</h2>
            </div>
            <div className="socials--name">
                <h3>INSTAGRAM</h3>
                <h2>{instagram}</h2>
            </div>
    
        </div>
    </div>
  )
}

export default SocialsInfo