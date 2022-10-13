import React,{useState, useEffect} from 'react'
import {WiDirectionLeft} from "react-icons/wi"
import UsersDetail from './UsersDetail'
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import SocialsInfo from './SocialsInfo'
import GuarantorInfo from './GuarantorInfo'
import "./UserBody.css"
import axiosPrivate from "../hooks/useAxiosPrivate"
import {useParams} from "react-router-dom"
import Logout from './Logout'


function UserBody() {

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
            // isMounted && reset(data);
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
    <div className="userBody1">
      <div className="userBody">
          <div className="userBody--top">
            <WiDirectionLeft/>
            <div className="userBody--text">Back to Users</div>
          </div>
          <div className="userBody--detail--active">
            <div className="userBody--detail--title">User Details</div>
            <div className="blacklist--active">
              <div className="blacklist">BLACKLIST USER</div>
              <div className="active">ACTIVATE USER</div>
            </div>
            
          </div>
          <div className="users--detail--page">
            <UsersDetail 
            firstName = {user?.profile?.firstName}
            lastName = {user?.profile?.lastName}
            organizationName= {user?.orgName}
            acct_balance={user?.accountBalance}
            bank={user?.education?.sector}
            acct_num ={user?.accountNumber}
            avatar={user?.profile?.avatar}
            />
          </div>
          <div className="user--info">
            <div className="personal">
              <PersonalInfo
                firstName = {user?.profile?.firstName}
                lastName = {user?.profile?.lastName}
                phone={user?.profile?.phoneNumber}
                email={user.email}
                bvn={user?.profile?.bvn}
                address={user?.profile?.address}
              />
            </div>
            <div className="education">
              <EducationInfo
                level={user?.education?.level}
                status={user?.education?.employmentStatus}
                sector={user?.education?.sector}
                duration={user?.education?.duration}
                office_email={user?.education?.officeEmail}
                monthly_income= {user?.education?.monthlyIncome[0] - user?.education?.monthlyIncome[1]}
                loan_repayment={user?.education?.loanRepayment}
              />
            </div>
            <div className="socials">
              <SocialsInfo 
                twitter={user?.socials?.twitter}
                facebook={user?.socials?.facebook}
                instagram={user?.socials?.instagram}
              />
            </div>
            <div className="guarantor">
              <GuarantorInfo
                firstName = {user?.guarantor?.firstName}
                lastName = {user?.guarantor?.lastName}
                phone={user?.guarantor?.phoneNumber}
              address={user?.guarantor?.address}
              />
            </div>
          </div>
          <div className="users--logout">
            <Logout/>
          </div>
      </div>
      
        
      
    </div>
  )
}

export default UserBody