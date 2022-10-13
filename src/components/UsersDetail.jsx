import React from 'react'
import {RiUserLine} from "react-icons/ri"
import {AiOutlineStar} from "react-icons/ai"
import { Avatar } from "@material-ui/core"
import "./UsersDetail.css"

function UsersDetail({firstName, lastName, organizationName,acct_balance, bank,acct_num, avatar}) {
  return (
    <div className="user--detail">
        <div className="user--container">
            <div className="user--detail--header">
                <Avatar
                    className="header--avatar"
                    alt= {firstName}
                    src={avatar}
                />
                <div className="user--detail--name">
                    <h2>{firstName} {lastName}</h2>
                    <p>{organizationName}</p>
                </div>
            </div>
            
            <div className="user--star">
                <h3>User's Tier</h3>
                <div className="user--detail--star"><AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/></div>
            </div>
            <div className="user--acct">
                <h2>#{acct_balance}</h2>
                <h5>{acct_num}/{bank}</h5>
            </div>
        </div>
        <div className="user--headline">
            <div className="general">General Details</div>
            <div className="document">Documents</div>
            <div className="bank1">Bank Details</div>
            <div className="loan">Loans</div>
            <div className="savings">Savings</div>
            <div className="app">App and System</div>
        </div>
        

    </div>
  )
}

export default UsersDetail