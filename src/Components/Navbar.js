import React, { useState, useEffect } from "react";
import {HashLink as Link} from "react-router-hash-link"


export default function Navbar() {

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 1200 && showNav){
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, [showNav]);

  return (
    <div id="home">
      <div className="navbar flex justify-between text-3xl pl-[9rem] pr-[5rem] w-[100%] h-[100%] mt-0">
        <div className="logo block justify-start text-left h-[40px] ml-[9rem] mt-7 w-auto font-semibold decoration-none"><Link to="#home" style={{background:"none"}}>KAM_PAT</Link>
          
        </div>
        <ul className="nav-right absolute flex justify-center w-[55%] ml-[28rem] h-12 mt-6 font-semibold text-base gap-14 z-99">

            <Link to="#home" className="t1 mt-[0.6rem]" style={{background:"none"}}>Home</Link>
            <Link to="#projects" className="t2 mt-[0.6rem]" style={{background:"none"}} smooth >Projects</Link>
            <Link to="#contact" className="t3 mt-[0.6rem]" style={{background:"none"}} smooth>Contact</Link>
           <a href="https://drive.google.com/file/d/1pXsbs16n3lr1Mzl9z2SEyV9NvOguYiYM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{background:"none"}}>
            <li className="resume mr-[1rem] px-[16px] py-[7px] bg-[#fff] rounded-[15px] border-[#5b51b1c7] border-solid border-[2px] text-center h-11 w-24">Resume</li>
            </a> 
          </ul>

        <div className="sidebar-toggle" onClick={()=>setShowNav(!showNav)}>
           <span className="material-symbols-outlined">{showNav? "close":"menu"}</span>
        </div>
        <div className={`sidenav ${showNav ? 'sidenav-open':'sidenav-close'}`}>
          <a href="/">  <Link to="#home" style={{background:"none"}} smooth >Home</Link></a>
          <a href="/">  <Link to="#projects" style={{background:"none"}} smooth >Projects</Link></a>
          <a href="/">  <Link to="#contact" style={{background:"none"}} smooth >Contact</Link></a>
          <a href="https://drive.google.com/file/d/1pXsbs16n3lr1Mzl9z2SEyV9NvOguYiYM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-sidenav bg-[#fff] rounded-[15px] border-[#5b51b1c7] border-solid border-[2px]">Resume</a>  
        </div> 
     
      </div>
    </div>
  );
}
