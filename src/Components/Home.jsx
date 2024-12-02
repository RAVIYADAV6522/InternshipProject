import React from "react";
import logo from "../assets/logo.png";
import bg1 from "../assets/bg1.png";
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'

function Home() {
  return (
    <div className=" h-screen bg-cover bg-center bg-[url('/src/assets/bg1.png')]">
      <div className="flex justify-between">
        <div>
          <img src={logo} className="w-60" />
        </div>

        <div className="flex justify-around gap-20 px-52 text-white pt-5">
          <h1 className=" cursor-pointer">About Us</h1>
          <h1 className=" cursor-pointer">Products</h1>
          <h1 className=" cursor-pointer">Blogs</h1>
          <h1 className=" cursor-pointer">Contact Us</h1>
          <h1 className=" cursor-pointer">logo</h1>
        </div>
      </div>

      <div className="text-white flex flex-col gap-7 mt-20 mx-5">
        <h1 className="text-6xl">
          The natural hair scrub <br /> Ukti
        </h1>

        <div className="flex items-center gap-5">
          <img src={l1}/>
          <p>Anti-Greying Properties</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={l2} />
          <p>Keep Hair Thick & Smooth</p>
        </div>

        <div className="flex items-center gap-5">
          <img src={l3}/>
          <p>100% Chemical Free</p>
        </div>

        <div className="border-2 w-36 py-3 px-3 rounded-3xl flex items-center justify-center bg-orange-400 mx-3">
          <button>Try it now!</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
