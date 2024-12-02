import React from "react";
import logo from "../assets/footerlogo.png";
import { PiInstagramLogoThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
function Footer() {
  return (
    <>
      <div className=" flex flex-col items-center h-screen bg-cover bg-center bg-[url('/src/assets/footer.png')]">
        <div className="w-[30vw] mt-20">
          <img src={logo} />
        </div>

        <div className="flex gap-10 text-xl text-white">
          <h1 className=" cursor-pointer">Home</h1>
          <h1 className=" cursor-pointer">About Us</h1>
          <h1 className=" cursor-pointer">Products</h1>
          <h1 className=" cursor-pointer">FAQ</h1>
          <h1 className=" cursor-pointer">Contact Us</h1>
        </div>

        <div className="w-[80vw] mt-7">
          <hr className="border-gray-300" />
        </div>

        <div className="flex gap-10 mt-7">
          <div className=" cursor-pointer w-12 h-12 border-2 rounded-full flex justify-center items-center">
          <PiInstagramLogoThin />
          </div>

          <div className=" cursor-pointer  w-12 h-12 border-2 rounded-full flex justify-center items-center">
          <SlSocialFacebook />
          </div>

          <div className=" cursor-pointer w-12 h-12 border-2 rounded-full flex justify-center items-center">
          <SlSocialYoutube />
          </div>
        </div>

        <div className="flex gap-5 mt-14 text-gray-400">
          <span className=" cursor-pointer">Terms and Conditions</span>
          <span className=" cursor-pointer">Privacy Policy</span>
          <span className=" cursor-pointer">Return Policy</span>
          <span className=" cursor-pointer">Shipping & Delivery</span>
        </div>

        <div className="text-gray-400 mt-7">
          <p>Copyright © 2024 Abhyanjana. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
