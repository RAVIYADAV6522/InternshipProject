import React from "react";
import logo from "../assets/footerlogo.png";
function Footer() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('/src/assets/footer.png')] flex flex-col items-center">
      {/* {upper part} */}
      <div>
        <div>
          <img className="w-60" src={logo} />
        </div>
        <div className="flex gap-5">
          <h1>About Us</h1>
          <h1>Products</h1>
          <h1>Blogs</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
      <hr className="border-gray-300 w-[80vw]" />

      {/* {lower part} */}
      <div>
        <div className="flex gap-3">
          <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center ">
            <h1>insta</h1>
          </div>

          <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
            <h1>Facebook</h1>
          </div>

          <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
            <h1>YouTube</h1>
          </div>
        </div>

        <div className="flex gap-3">
          <h1>About Us</h1>
          <h1>Products</h1>
          <h1>Blogs</h1>
          <h1>Contact Us</h1>
        </div>

        <p>Copyright © 2024 Abhyanjana. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
