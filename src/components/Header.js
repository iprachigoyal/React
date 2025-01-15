import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {

  const [btnName, setBtnName]= useState("Login");
  const onlineStatus=useOnlineStatus();

  const {loggedInUser}=useContext(UserContext);

  useEffect(()=>{
    console.log("useEffect called");
  },[])
  
    return (
      <div className="flex justify-between  bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-24"
            src={LOGO_URL}
            alt="logo-conatiner"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online status: {onlineStatus? "🟢":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About us</Link></li>
            <li className="px-4"><Link to="/contact">Contact us</Link></li>
            <li className="px-4"><Link to="/grocery"> Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={()=>{
              btnName==="Login" ? setBtnName("Logout"):setBtnName("Login")
            }}>{btnName}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;