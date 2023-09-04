import React, { useEffect, useState } from 'react'
import {HiOutlineXMark} from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKifiLogin } from '../../views/desktop/kifi/Login/Login.slice'
import { fetchKifiChangePassword } from '../../views/desktop/kifi/User/ChangePassword.slice'
import { fetchKifiGetUserProfile } from '../../views/desktop/kifi/User/GetUserProfile.slice'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

function PasswordModal({handleChangePassword}:any) {
const dispatch = useDispatch()
const [currentPassword,setCurrentPassword] = useState()
const [newPassword,setNewPassword] = useState()
const [confirmPassword,setConfirmPassword]=useState()
const Navigate = useNavigate()
const param={
    "current_password":currentPassword,
    "new_password" :newPassword,
    "password_confirmation" :confirmPassword
}
const kifLogin = useSelector((state: any) => state.ChangePassword);

const handlePasswordApi = () =>{
 //@ts-ignore
dispatch(fetchKifiChangePassword(param))
if (kifLogin?.data?.errorcode == 0) {
    console.log("success message",kifLogin);

    toast.success(kifLogin?.data?.errormessage);
    setTimeout(() => {
      Navigate("/");
    }, 23000);
  }
  else if(kifLogin?.data?.errorcode == 10)
  {
  toast.error(kifLogin?.data?.errormessage);
  }
}
   



  return (
    <>
    <ToastContainer />

    <div>

        <div className="relative shadow-2xl z-10 w-full" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <HiOutlineXMark size={30}  style={{width:"100%",display:"flex",justifyContent:"right",marginLeft:"47%"}}
  onClick={handleChangePassword}
  />
<label htmlFor="price" className="block text-lg font-medium leading-8 text-gray-900">
        Change Password
      </label>
 

  <div className="relative inset-0 z-10 overflow-y-auto">

    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className=" transform overflow-hidden transition-all sm:my-8 ">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
          <div className="flex w-full">
            
            
            {/* <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div> */}

    <div>
    <label htmlFor="price" className="block text-lg font-medium leading-8 text-gray-900">
        Current password
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e:any)=>setCurrentPassword(e.target.value)}
        />
        <label htmlFor="price" className="block text-lg font-medium leading-8 text-gray-900">
        New Password
      </label>
      </div>
      
      <div className="relative mt-2 rounded-md shadow-sm">
        
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e:any)=>setNewPassword(e.target.value)}
        
        />
        <label htmlFor="price" className="block text-lg font-medium leading-8 text-gray-900">
        Confirm Password
      </label>
         <div className="relative mt-2 rounded-md shadow-sm">
        
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e:any)=>setConfirmPassword(e.target.value)}
         
        />
        
      </div>
      </div>
    </div>

          </div>
        </div>
        <div className="bg-gray-50 px-10 py-3 sm:flex justify-between ">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
  onClick={handleChangePassword}
          
          >Cancel</button>
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
         onClick={handlePasswordApi} 
          >Confirm</button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  </>   
  )
}

export default PasswordModal