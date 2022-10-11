import React from 'react'
import "./UserStatus.css"

function UserStatus({ title, avatar, number_of_users}) {
  return (
    <div className="body--status">
      <img src={avatar} className="body--avatar" />
      <h4 className="body--title">{title}</h4>
      <h4 className="body--users">{number_of_users}</h4>
    </div>
  )
}

export default UserStatus