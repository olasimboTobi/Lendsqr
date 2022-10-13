import React,{ useState,useEffect } from 'react'
import Group from "../download/Group.svg"
import "./UserHeader.css"
import { Avatar } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import {Link, useParams} from "react-router-dom"
import axiosPrivate from "../hooks/useAxiosPrivate"

function UserHeader() {

  const {id} = useParams()
  console.log(id)

  const [user, setUser] = useState({})

  
  useEffect(()=>{
    const datum = window.localStorage.getItem('user');
    if(datum !== null) setUser(JSON.parse(datum))
  }, [])

  
  useEffect(()=>{
    window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
        try {
            const response = await axiosPrivate.get(`users/${id}`, {
                signal: controller.signal
            });
            const data = response.data
            console.log(data);
            isMounted && setUser(data);
        } catch (err) {
            console.error(err);
        }
    }

    getUser();

    return () => {
        isMounted = false;
        controller.abort();
    }
  }, [])


  console.log(user)


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
          alt= {user?.profile?.firstName}
          src={user?.profile?.avatar}
        />
        <div className="header--select">
          <h3>{user?.profile?.firstName}</h3>
        </div>
      </div>
    </div>
  )
}

export default UserHeader;

