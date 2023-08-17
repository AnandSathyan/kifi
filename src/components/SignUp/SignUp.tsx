import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import $ from "jquery";
import "./SignUp.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { fetchKifiRegister } from "../../views/desktop/kifi/Register/Register.slice";
// import ToastMessage from "../Notifiction/ToastMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [mobile, setMobile] = useState();
  // const [flag, setFlag] = useState(false);
  const KifiStore = useSelector((state: any) => state.Register);
  console.log("KifiStoreKifiStore", KifiStore?.data?.data);
  // const mobilemessage: string = KifiStore?.data?.data?.mobile;
  // const emailmessage: string = KifiStore?.data?.data?.email;
  // const passwormessage: string = KifiStore?.data?.data?.password;
  // const confirmPasswordmessage: string =
  //   KifiStore?.data?.data?.confirm_password;
  // const namemessage: string = KifiStore?.data?.data?.name;
  // const errorMessage: string = KifiStore?.data?.errormessage;

  console.log("emailemail", email, name, password, confirmPassword, mobile);
  const params = {
    name: name,
    mobile: mobile,
    email: email,
    password: password,
    confirm_password: confirmPassword,
  };
  const handleRegister = (e: any) => {
    // if (
    //   name !== undefined &&
    //   mobile !== undefined &&
    //   email !== undefined &&
    //   password !== undefined &&
    //   confirmPassword !== undefined
    // ){
      //@ts-ignore
      dispatch(fetchKifiRegister(params));
    // }

    if (KifiStore?.data?.errorcode == 0) {
      toast.success(KifiStore?.data?.data);

      // setTimeout(() => {
      //   Navigate("/Payment");
      // }, 5000);

    } else if (KifiStore?.data?.errorcode == 10) {
      toast.error(KifiStore?.data?.errormessage);
    }

    // setFlag(true);
  };

  return (
    <div className="signup_form">
      <ToastContainer />
      <div className="form_wrapper ">
        <div className="form_container">
          <div className="title_container">
            <h2>Register</h2>
          </div>
          <div className="row clearfix">
            <div>
              <form className="">
                <div className="">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </div>
                <div className="">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </div>
                <div className="">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    required
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        onChange={(e: any) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className=" radio_option mb-4">
                  <input type="radio" name="radiogroup1" id="rd1" />
                  <label htmlFor="rd1">Male</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label htmlFor="rd2">Female</label>
                </div>
                {/* <div className=" select_option">
                  <select>
                    <option>Select a country</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <div className="select_arrow"></div>
                </div> */}

                <div
                  className="form-group w-full"
                  onChange={(e: any) => setMobile(e.target.value)}
                >
                  {/* <input type="text" id="mobile_code" className="form-control" placeholder="Phone Number" name="name"/> */}

                  <PhoneInput
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
                <div className=" checkbox_option mt-6">
                  <input type="checkbox" id="cb1" />
                  <label htmlFor="cb1">I agree with terms and conditions</label>
                </div>
                {/* <div className=" checkbox_option">
                  <input type="checkbox" id="cb2" />
                  <label htmlFor="cb2">I want to receive the newsletter</label>
                </div> */}
                <button
                  id="login-btn"
                  className="w-full my-6 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                  onClick={handleRegister}
                >
                  Register
                </button>

                <span
                  className="w-full text-center"
                  onClick={() => Navigate("/Login")}
                >
                  SignIn
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="credit">
        Developed by{" "}
        <a href="http://www.designtheway.com" target="_blank">
          Design the way
        </a>
      </p> */}
    </div>
  );
}

export default SignUp;
