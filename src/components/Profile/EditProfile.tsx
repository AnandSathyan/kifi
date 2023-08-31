import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchKifiUpdateUserProfile } from '../../views/desktop/kifi/User/UpdateUserProfile.slice';
import './EditProfile.css'
import ImageUpload from './imageUpload/ImageUpload';
function EditProfile() {
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [images,setImage] = useState()
	const [mobile,setMobile] = useState("")

	const profileStore = useSelector((state:any)=>state.GetUserProfile)
    const [selectedImage, setSelectedImage] = useState();
    // console.log("selectedImage",selectedImage);
    const dispatch = useDispatch()
	console.log("profileStore",profileStore?.data?.data);
	
//     const handleUpdate = async(e:any) =>{
//         console.log("selectedImage",e);
        
//      let files = e?.target?.files;
//      let reader =  new FileReader();
//      await reader.readAsDataURL(files[0])
//         reader.onloadend=(e:any)=>{
//             console.warn("img data:",e?.target?.result);
//             setSelectedImage(e?.target?.result)
//         } 

       
    
// //     var blob1 = new Blob(e, { type: "text/plain" });
// // let url = window.URL.createObjectURL(blob1);

// // var a = document.createElement("a");
// // document.body.appendChild(a);
// // // a.style = "display: none";
// // a.href = url;
// // a.setAttribute("download","Any name");
// // a.click();
// // window.URL.revokeObjectURL(url);

//     }

	const handleImageUpload = () => {
		console.log("image from image upload",images);
		   //@ts-ignore
		dispatch(fetchKifiUpdateUserProfile({
            "email":email,
            "image":images,
            "mobile":mobile,
            "name":name
        }))
		// Implement your image upload logic here.
		// You can use Fetch API, Axios, or any other library for making API requests.
		// Don't forget to handle errors and responses appropriately.
	  };
    const handleUpdateProfile = (image:any) =>{
		// console.log("email :",email,"name :",name,"mobile :",mobile);
		console.log("imageimageimageimage",image);
		//@ts-ignore
		setImage(URL.createObjectURL(image))
		
		 
		
    }
  return (
  
    <div className="container" style={{padding:"50px"}}>

	<h1 className="title">Edit profile</h1>
	{/* <h1>&#128525;</h1> */}

	<div className="grid">
		<div className="form-group a">
			<label htmlFor="name" >name</label>
			<input id="name" type="text" onChange={(e:any)=>setName(e.target.value)} placeholder={profileStore?.data?.data?.name}/>
		</div>
{/* 
		<div className="form-group b">
			<label htmlFor="first-name">First Name</label>
			<input id="first-name" type="text"/>
		</div> */}

		<div className="form-group email-group">
			<label htmlFor="email" >email</label>
			<input id="email" type="text" onChange={(e:any)=>setEmail(e.target.value)} placeholder={profileStore?.data?.data?.email}/>
		</div>

        <div className="form-group extra-group">
			<label htmlFor="phone" >mobile</label>
			<input id="phone" type="text"  onChange={(e:any)=>setMobile(e.target.value)} placeholder={profileStore?.data?.data?.mobile}/>
		</div>

		{/* <div className="form-group phone-group">
			<label htmlFor="phone">mobile</label>
			<input id="phone" type="text"/>
		</div> */}

		<form className="textarea-group flex flex-col justify-center" >
            
            {/* <img
            //@ts-ignore
             src={selectedImage} alt='image'/> */}
				{/* <input
				type="file"
				name="myImage"
				//  onChange={(event) => {
				// setSelectedImage(event);
				//  }}
				/>  */}
				
		<ImageUpload handleUpdateProfile={handleUpdateProfile}/>
		
               
            
		{/* <button className="button"
        // onClick={(e) => setSelectedImage(e)}
        >  Update Picture</button> */}
		</form>
        

		{/* <div className="form-group">
			<label htmlFor="address">Adresse</label>
			<input id="address" type="text"/>
		</div>

		<div className="form-group">
			<label htmlFor="city">Ville</label>
			<input id="city" type="text"/>
		</div>

		<div className="form-group">
			<label htmlFor="zip">Code postal</label>
			<input id="zip" type="text"/>
		</div> */}
	</div>

	<div className="checkboxes">

		<div className="checkbox-group">
			<input id="newsletter" type="checkbox"/>
			<label htmlFor="newsletter">I accept all the terms and conditions.</label>
		</div>

		{/* <div className="checkbox-group">
			<input id="newsletter-partners" type="checkbox"/>
			<label htmlFor="newsletter-partners">Je souhaite recevoir la newsletter des partenaires</label>
		</div> */}

	</div>

	<div className="button-container">
		<button className="button" onClick={handleImageUpload}>Update Profile</button>
	</div>
</div>
  )
}

export default EditProfile