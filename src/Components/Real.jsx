import React from "react";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";

function Real() {
  return (
    <div className="flex flex-col items-center gap-6 mt-16">
      <h1 className="text-5xl">Real People Real Stories </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-3">
          <img src={r1} className="w-[20vw]" />
          <img src={r2} className="w-[20vw]" />
          <img src={r3} className="w-[20vw]" />
          <img src={r4} className="w-[20vw]" />
        </div>
      </div>
    </div>
  );
}

export default Real;
