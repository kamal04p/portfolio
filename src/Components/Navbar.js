import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar flex justify-between text-3xl px-[9rem]">
        <div className="logo py-[2.3rem] ml-[9rem] font-semibold">
          Kam_Pat
          </div>
        <ul className="nav-right flex px-[6rem] py-[35px] font-semibold text-base">
          <li className="t1 mt-[0.6rem] mr-[3rem]">Home</li>
          <li className="t2 mt-[0.6rem] mr-[3rem]">Projects</li>
          <li className="t3 mt-[0.6rem] mr-[3rem]">Contact</li>
          <li className="resume mr-[1rem] px-[16px] py-[7px] bg-[#fff] rounded-[15px] border-[#5b51b1c7] border-solid border-[2px] h-11 w-24">Resume</li>
        </ul>
      </div>
    </>
  );
}
