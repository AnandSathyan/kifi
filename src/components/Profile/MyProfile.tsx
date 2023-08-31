import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchKifiGetUserProfile } from '../../views/desktop/kifi/User/GetUserProfile.slice'
import './MyProfile.scss'
function MyProfile() {
    const [flag,setFlag] = useState(false)
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
    const handleEdit = (e:any) =>{
      console.log("hiiii");
      
      e.preventDefault()
      Navigate('/EditProfile')
    }
  return (
    <div>
      <div className=''>
        {flag?
 <ul className="dropdown-list-profile">

    <li className='dropdown-item'>
      <a className='text-center'
      onClick={(e:any)=>handleEdit(e)}
      >Edit Profile</a>
   
    </li>
</ul>:null}
</div>
        <div className="background"></div>
  <IoSettingsOutline size={45} className="absolute top-[60px] right-[16px] menu-title" onClick={handleProfileModal}/>
<div className="profile-card">
  <div className="cover"></div>
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
    <div className="below-fold">
      <div className="about">
        <h3>
          About
        </h3>
        <p>
          Hi, I am Douwe de Vries, 28 summers young and I am passionate about User Experiences, Design, Front-end development and game development. Like to talk about any of these things? Shoot me a message!
        </p>
      </div>
      <div className="row stats">
        <div className="stat">
          <label>Posts</label>
          <div className="num">
            956
          </div>
        </div>
        <div className="stat">
          <label>Followers</label>
          <div className="num">
            312
          </div>
        </div>
        <div className="stat">
          <label>Following</label>
          <div className="num">
            104
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default MyProfile