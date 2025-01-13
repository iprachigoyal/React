import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router";
const Header = () => {

  const [btnName, setBtnName]= useState("Login");
  useEffect(()=>{
    console.log("useEffect called");
  },[])
  
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo-conatiner"
          />
        </div>
        <div className="navItems">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName==="Login" ? setBtnName("Logout"):setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;