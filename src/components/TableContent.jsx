import React from 'react'
import "./TableContent.css"
import {BsThreeDotsVertical} from "react-icons/bs"

function TableContent({id,organization,username,email,phone,date_joined,status}) {
  // let real_status = ""
  // if(status === new Date().toLocaleString()){
  //   let real_status = "Inactive"
  //   return real_status
  // }
  // else if(status < new Date().toLocaleString){
  //   let real_status = "Blacklisted"
  //   return real_status
  // }
  // else if(status > new Date().toLocaleString){
  //   let real_status = "Active"
  //   return real_status
  // }
  // else{
  //   let real_status = "Pending"
  //   return real_status
  // }
  // console.log(real_status)

  return (
    <>
      <div className="table--content">
          <p className="table--org">{organization}</p>
          <p className="table--username">{username}</p>
          <p className="table--email">{email}</p>
          <p className="table--phone">{phone}</p>
          <p className="table--date">{date_joined}</p>
          {/* {<p className= {real_status==="Inactive" && "table--inactive" && real_status==="Blacklisted" && "table--blacklisted" && 
            real_status==="Active" && "table--active" && real_status==="Pending" && "table--Pending"}>{real_status}</p>} */}
          <p className="table--status">{status}</p>
          <p><BsThreeDotsVertical/></p>
      </div>
      <hr/>
    </>
    
      
    
  )
}

export default TableContent;