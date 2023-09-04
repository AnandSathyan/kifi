import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchKifiGetUserProfile } from '../../views/desktop/kifi/User/GetUserProfile.slice'
import PasswordModal from '../Modals/PasswordModal'

import './MyProfile.scss'
function MyProfile() {
    const [flag,setFlag] = useState(false)
    const [password,setPassword] = useState(false)
    const Navigate = useNavigate()
    const ProfileName = useSelector((state:any)=>state.GetUserProfile)
    console.log("ProfileName",ProfileName?.data?.data);
    const dispatch = useDispatch()
    const handleLogOut = () =>{
        sessionStorage.setItem("AuthToken","")
        Navigate('/')
    }
    useEffect(()=>{
//@ts-ignore
dispatch(fetchKifiGetUserProfile())
    },[])

    const handleProfileModal = () =>{
      setFlag(!flag)
    }
    const handleEdit = () =>{
      console.log("hiiii");
      Navigate('/EditProfile')
    }

    const handleChangePassword = () =>{
      setPassword(!password)
    }

  return (
    <div>
      <div>
        {flag?
 <ul className="absolute top-28 right-6 w-[200px] shadow-2xl rounded-lg p-3">

    <li className=''
      
      >
      <a className='text-center p-3'
      onClick={handleEdit}
      >Edit Profile</a>
       {!password?<a className='text-center p-3'
       onClick={handleChangePassword}
      >Change Password</a>:null}
   
    </li>
</ul>:null}
</div>
        <div className="background"></div>
  <IoSettingsOutline size={45} className="absolute top-[60px] right-[16px] menu-title" onClick={handleProfileModal}/>
<div className="profile-card">
  <div className="cover"></div>
  { !password?
  <div className="profile">
    <div className="pic"></div>
    <div className="above-fold">
      <div className="name">
        {ProfileName?.data?.data?.name}
      </div>
      <div className="role">
        {/* UX Engineer */}
        {ProfileName?.data?.data?.email}

      </div>
      <div className="location">
      {ProfileName?.data?.data?.mobile}

        {/* <i className="fas fa-map-marker-alt"></i>Gouda, the Netherlands */}
      </div>
      <div className="row">
        <div className="button"
        onClick={()=>handleLogOut()}>
          Log Out
        </div>
        {/* <div className="button">
          MESSAGE
        </div> */}
      </div>
      <div id="expand-button">
        <i className="fas fa-arrow-down"></i>
      </div>
    </div>
  </div>
:
<>
<PasswordModal handleChangePassword={handleChangePassword}/>
</>
}

</div>
    </div>
  )
}

export default MyProfile