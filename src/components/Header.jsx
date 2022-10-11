import React,{useState} from 'react'
import Group from "../download/Group.svg"
import "./Header.css"
import { Avatar } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import {Link} from "react-router-dom"

function Header({users}) {

  const[userId, setUserId] = useState('')

  const onUserChanged = e => setUserId(e.target.value)
  const data = users?.find(user => user.id === userId)
  console.log(data)

  return (
    <div className="header">
      <div className="header--left">
        <img src={Group} alt="logo" className="header--logo"/>
      </div>
      <div className="header--search">
        <input placeholder="Search for anything" className="header--input"/>
        <div className="header--search--icon">
          <SearchIcon className="search--icon"/>
        </div>
      </div>
      <div className="header--right">
        <Link to="#" className="doc">Docs</Link>
        <NotificationsNoneIcon className="notify--icon"/>
        <Avatar
          className="header--avatar"
          alt= {data?.profile?.firstName}
          src={data?.profile?.avatar}
        />
        <div>
          <select value={userId} className="header--select"  onChange={onUserChanged}>
            {users.map(user => (
              <option value={user.id} key={user.id}>{user?.profile?.firstName}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header