import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {

    const [menu,setMenu]=useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>{setMenu("contact us")}} className={menu==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>
          <div className="star-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="tomato"
              ></path>
            </svg>
          </div>
          <div className="star-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="tomato"
              ></path>
            </svg>
          </div>
          <div className="star-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="tomato"
              ></path>
            </svg>
          </div>
          <div className="star-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="tomato"
              ></path>
            </svg>
          </div>
          <div className="star-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="tomato"
              ></path>
            </svg>
          </div>
          <div className="star-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="tomato"
              ></path>
            </svg>
          </div>
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
