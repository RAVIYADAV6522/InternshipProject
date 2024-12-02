import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";

export default function Follow() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-5 mb-10">
        <h1 className="text-5xl">Follow Us</h1>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <img src={p1} className="w-60 h-60" />
            <img src={p2} className="w-60 h-60" />
            <img src={p3} className="w-60 h-60" />
            <img src={p4} className="w-60 h-60" />
            <img src={p5} className="w-60 h-60" />
            <img src={p6} className="w-60 h-60" />
            <img src={p7} className="w-60 h-60" />
            <img src={p8} className="w-60 h-60" />
          </div>
        </div>

        <div className="flex gap-4 text-white">
          <button className="border-2 px-2 py-2 rounded-xl bg-black">
            Load More
          </button>
          <button className="border-2 px-2 py-2 rounded-xl bg-blue-400">
            Follow on Instagram
          </button>
        </div>

        <div className="w-[70vw] h-[40vh] border-2 border-y-amber-300 flex flex-col items-center justify-center gap-5 rounded-2xl mt-10">
          <h1 className="text-4xl">Subscribe & Get 10% Off</h1>
          <p className="text-gray-400">
            Be updated on new arrivals, trends, and offers. Subscribe now!
          </p>
          <div className="flex  gap-3">
            <input
              className="border-2 border-y-amber-300 rounded-3xl w-[20vw]"
              placeholder="Email"
            ></input>
            <button className="border-2 rounded-3xl px-6 py-3 bg-amber-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
