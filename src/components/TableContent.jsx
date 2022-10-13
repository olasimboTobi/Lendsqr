import React from 'react'
import "./TableContent.css"
import {BsThreeDotsVertical} from "react-icons/bs"

function TableContent({id,organization,username,email,phone,date_joined,status,onLink}) {
 


  return (
    <>
      <div className="table--content" onClick={(e) => onLink(id)}>
          <p className="table--org">{organization}</p>
          <p className="table--username">{username}</p>
          <p className="table--email">{email}</p>
          <p className="table--phone">{phone}</p>
          <p className="table--date">{date_joined}</p>

          <p className="table--status">{status}</p>
          <p><BsThreeDotsVertical/></p>
      </div>
      <hr/>
    </>
    
      
    
  )
}

export default TableContent;