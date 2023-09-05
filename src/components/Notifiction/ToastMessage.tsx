import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastMessage(message:string,flag:any){
//  console.log("Toast Message",message,flag);
//  const stringmsg = message+''
 if(flag){
    toast.error(message);
 }
 
  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </div>
  );
}