import React from "react";
import hand from "../assets/hand.png";
import chemical from "../assets/chemical.png";
import cold from "../assets/cold.png";
import cruelty from "../assets/cruelty.png";
import century from "../assets/century.png";
import herbal from "../assets/herbal.png";

function LoveAndCare() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 mt-10">
        <h1 className="text-5xl">Crafted with love And care</h1>
        <p className="text-gray-500 flex flex-col items-center gap-2 text-xl">
          We use materials that are organically grown and naturally sourced
          ingredients. All our products <br />{" "}
          <span>
            are tested to ensure they are safe and maintain the standard
            benchmark.
          </span>
        </p>
      </div>

      <div className="w-[80vw] mt-7">
        <hr className="border-gray-300" />
      </div>

      <div className="flex gap-6 mt-16 mb-16">
        <img src={hand} />
        <img src={chemical} />
        <img src={cold} />
        <img src={cruelty} />
        <img src={century} />
        <img src={herbal} />
      </div>

      <div className="w-[80vw] mt-7 mb-5">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}

export default LoveAndCare;
