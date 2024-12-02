import React from "react";
import care from "../assets/care.png";
function Care() {
  return (
    <div className="w-[90vw] h-[85vh] flex flex-col justify-center items-center gap-10">
      <h1 className="text-5xl mt-7">Abhyanjana: Crafting Care</h1>
      <div className="flex gap-7 border-orange-300 border-2 rounded-full mx-7 justify-center items-center">
        <img src={care} className="w-[40vw] border-white rounded-s-full" />
        <div>
          <p>
            Abhyanjana, emerged from a tradition of natural remedies, starting
            with a grandmother’s handcrafted hair oil made from homegrown
            ingredients. This recipe was perfected by a devoted mother for her
            son’s self-care needs. Each product of Abhyanjana is organically
            made and free from harmful chemicals, embodies love, tradition, and
            a nurturing spirit with organically sourced ingredients Abhyanjana
            continues its legacy of high-quality, organic hair care rooted in
            love, tradition, and a nurturing spirit passed down through
            generations.
          </p>
          <button className="border-2 px-4 py-3 mt-5 rounded-3xl bg-orange-300">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Care;
