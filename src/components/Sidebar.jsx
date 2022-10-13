import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import {TbCurrencyNaira} from "react-icons/tb"
import {FaRegHandshake} from "react-icons/fa"
import {MdOutlineSavings} from "react-icons/md"
import {GiReceiveMoney} from "react-icons/gi"
import {IoMdPerson} from "react-icons/io"
import {GrOrganization} from "react-icons/gr"
import {FaRegImages} from "react-icons/fa"
import {GrTransaction} from "react-icons/gr"
import {GrServices} from "react-icons/gr"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {RiHome4Fill} from "react-icons/ri"
import {HiOutlineDocumentReport} from "react-icons/hi"
import {MdRoomPreferences} from "react-icons/md"
import {SiLogstash} from "react-icons/si"


function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarOption Icon={BusinessCenterIcon} title="Switch Organization"/>
        <SidebarOption Icon = {HomeIcon} title="Dashboard"/>
        <br/>
        <br/>
        <br/>
        <strong className="sidebar--title">CUSTOMERS</strong>
        <SidebarOption Icon = {PeopleIcon} title="Users"/>
        <SidebarOption Icon = {PersonIcon} title="Guarantors"/>
        <SidebarOption Icon = {TbCurrencyNaira} title="Loans"/>
        <SidebarOption Icon = {FaRegHandshake} title="Decision Models"/>
        <SidebarOption Icon = {MdOutlineSavings} title="Savings"/>
        <SidebarOption Icon = {GiReceiveMoney} title="Loan Requests"/>
        <SidebarOption Icon = {IoMdPerson} title="WhiteList"/>
        <SidebarOption Icon = {IoMdPerson} title="Karma"/>
        <br/>
        <br/>
        <br/>
        <strong className="sidebar--title">BUSINESSES</strong>
        <SidebarOption Icon = {GrOrganization} title="Organization"/>
        <SidebarOption Icon = {GiReceiveMoney} title="Loan Products"/>
        <SidebarOption Icon = {MdOutlineSavings} title="Saving Products"/>
        <SidebarOption Icon = {FaRegImages} title="Fees and Charges"/>
        <SidebarOption Icon = {GrTransaction} title="Transactions"/>
        <SidebarOption Icon = {GrServices} title="Services"/>
        <SidebarOption Icon = {BsFillPersonLinesFill} title="Service Account"/>
        <SidebarOption Icon = {RiHome4Fill} title="Settlements"/>
        <SidebarOption Icon = {HiOutlineDocumentReport} title="Reports"/>
        <br/>
        <br/>
        <br/>
        <strong className="sidebar--title">SETTINGS</strong>
        <SidebarOption Icon = {MdRoomPreferences} title="Preferences"/>
        <SidebarOption Icon = {FaRegImages} title="Fees and Pricing"/>
        <SidebarOption Icon = {GrOrganization} title="Audit Logs"/>
        
    </div>
  )
}

export default Sidebar