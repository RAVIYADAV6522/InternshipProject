import React from "react";
import star from "../assets/start.png";
import o1 from "../assets/o1.png";
import o2 from "../assets/o2.png";
import o3 from "../assets/o3.png";
import o4 from "../assets/o4.png";
function OurProducts() {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl mt-16">Our Products</h1>
        <div className="flex gap-3 items-center justify-center">
          <div className="flex flex-col gap-3 w-[20vw]">
            <div>
              <img src={o1} className="w-60" />
            </div>

            <h1>
              Samasti Hair Oil ‐ <br /> Natural hair oil for hair <br />
              growth (100ML)
            </h1>
            <img src={star} className="w-[7vw]" />
            <div className="flex gap-2">
              <span className="text-gray-400 line-through">$699</span>
              <span>$599</span>
            </div>

            <button className="border-2 border-orange-400 px-7 py-2 rounded-xl w-[15vw] bg-orange-500">
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-3 w-[20vw]">
            <div>
              <img src={o2} className="w-60" />
            </div>

            <h1>
              Abhyanjana Haircare Kit – Best <br /> hair care kit for Hair
              Growth
            </h1>
            <img src={star} className="w-[7vw]" />
            <div className="flex gap-2">
              <span className="text-gray-400 line-through">$898</span>
              <span>$699</span>
            </div>

            <button className="border-2 border-orange-400 px-7 py-2 rounded-xl w-[15vw] bg-orange-500">
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-3 w-[20vw]">
            <div>
              <img src={o3} className="w-60" />
            </div>

            <h1>
              Ukti – Natural Hair Scrub (100 <br /> g)
            </h1>
            <img src={star} className="w-[7vw]" />
            <div className="flex gap-2">
              {/* <span className="text-gray-400 line-through">$699</span> */}
              <span>$199</span>
            </div>

            <button className="border-2 border-orange-400 px-7 py-2 rounded-xl w-[15vw] bg-orange-500">
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-3 w-[20vw]">
            <div>
              <img src={o4} className="w-60" />
            </div>

            <h1>
              Samasti Hair Oil Pack of 2 <br /> (100ml)
            </h1>
            <img src={star} className="w-[7vw]" />
            <div className="flex gap-2">
              <span className="text-gray-400 line-through">$1597</span>
              <span>$1099</span>
            </div>

            <button className="border-2 border-orange-400 px-7 py-2 rounded-xl w-[15vw] bg-orange-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
