import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="flex justify-between">

      <div className="w-44 mx-10">
        <img src={logo} />
      </div>

      <div className="flex justify-around gap-10 px-40">
        <h1>About Us</h1>
        <h1>Products</h1>
        <h1>Blogs</h1>
        <h1>Contact Us</h1>
      </div>
    </div>
  );
}

export default Navbar;
