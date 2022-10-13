import React, {useState} from "react";
import "./Body.css"
import UserStatus from "./UserStatus"
import icon3 from "../download/icon3.png"
import icon1 from "../download/icon1.png"
import icon2 from "../download/icon2.png"
import icon4 from "../download/icon4.png"
import TableHeader from "./TableHeader"
import TableContent from "./TableContent"
// import {MdFilterList} from "react-icons/md"
import FilterListIcon from '@material-ui/icons/FilterList';
import ReactPaginate from "react-paginate"


function Body({users, onLink}) {
  
  const PER_PAGE = 10;

  const[currentPage, setCurrentPage] = useState(0)

  const handlePageClick = ({selected: selectedPage})=>{
    console.log("selected", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  

  const userElement = users.slice(offset, offset + PER_PAGE).map(user => {
    return(
      <TableContent
        key={user?.id}
        id={user?.id}
        // organization={user?.orgName}
        organization="Lendsqr"
        username={user?.profile?.firstName + " " + user?.profile?.lastName}
        email={user?.email}
        phone={user?.profile?.phoneNumber}
        date_joined={user?.createdAt.toLocaleString()}
        status={user?.lastActiveDate.toLocaleString()}
        onLink={onLink}
       />
    )
  })

  const pageCount = Math.ceil(users.length / PER_PAGE);

  return (
    <div className="body--container">
        <h1 className="body--title">Users</h1>
        <div className="body--content">
          <UserStatus   
            
            title="USERS"
            avatar={icon3}
            number_of_users="2453"
            />
          <UserStatus  
           
            title="ACTIVE USERS"
            avatar={icon1}
            number_of_users="2453"
            />
          <UserStatus 
           
            title="USERS WITH LOANS"
            avatar={icon2}
            number_of_users="12453"
            />
          <UserStatus 
            
            title="USERS WITH SAVINGS"
            avatar={icon4}
            number_of_users="102453"
            />
        </div>
        <div className="body--table">
          <div className="table--header">
            <TableHeader
              title="ORGANIZATION"
              symbol={<FilterListIcon/>}
             
            />
            <TableHeader
              title="USERNAME"
              symbol={<FilterListIcon/>}
              
            />
            <TableHeader
              title="EMAIL"
              symbol={<FilterListIcon/>}
              
            />
            <TableHeader
              title="PHONE NUMBER"
              symbol={<FilterListIcon/>}
              
            />
            <TableHeader
              title="DATE JOINED"
              symbol={<FilterListIcon/>}
              
            />
            <TableHeader
              title="STATUS"
              symbol={<FilterListIcon/>}
              
            />
          </div>
          <div>
            {userElement}
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
          
          
           
           
        </div>
    </div>
  )
}

export default Body