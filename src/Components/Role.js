import React from "react";
import pointer from "../img/pointer.png";
import hello from "../img/hello.png";
import profilepic from "../img/ppp.png";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import flutter from "../img/flutter.png";
import tailwind from "../img/tailwind.webp";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

export default function Role(props) {
  return (
    <>
      <div className="role px-[10rem] h-[35rem]">
        <div className="welcome">Welcome to my Space!</div>
        <div className="titlename w-[100%] h-[5.5rem] flex font-semibold text-[3rem] ml-[8rem] mt-[7rem]">
          Front-End React Developer
          <img
            className="h-[40px] w-[40px] ml-[2rem] mt-[1rem]"
            src={hello}
            alt="hello"
          />
          <div className="bubble">
            <div className="profile-pic">
            <img src={profilepic} alt="ProfilePic" />
          </div>
          </div>
        </div>
        <div className="desc flex justify-start ml-[8.2rem] text-[16px] text-[#5b51b1c7] font-semibold">
          Hi! I am Kamal Patel. A passionate Front-end React Developer based in
          Toronto, Canada.
          <img className="h-[25px] w-[25px]" src={pointer} alt="location" />
        </div>
        <div className="links flex mx-[8.2rem] my-[2rem] text-[1.5rem] gap-3">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/kamal-patel04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <a
            href="https://www.github.com/kamal04p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://twitter.com/kamal04p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a> */}
        </div>
        <div className="tech-stack flex mt-[8rem] ml-[8rem] ">
          <div className="ts w-[15%] flex justify-start text-xl font-semibold pt-1">Tech Stack <span className="pl-4 font-normal"> | </span></div>
          <div className="ts1 h-[2rem] w-[2rem] mr-[4.1rem] pt-[2px]"><img src={html} alt="html" /></div>
          <div className="ts2 h-[2.3rem] w-[2.3rem] mr-[4rem]"><img src={css} alt="css" /></div>
          <div className="ts3 h-[2rem] w-[2rem] mr-[4rem]"><img src={js} alt="JS" /></div>
          <div className="ts4 h-[2rem] w-[2rem] mr-[4rem]"><img src={react} alt="react" /></div>
          <div className="ts5 h-[2rem] w-[2rem] mr-[3.5rem] pt-1"><img src={tailwind} alt="tailwind" /></div>
          <div className="ts6 h-[2rem] w-[2rem]"><img src={flutter} alt="flutter" /></div>
        </div>
        <div className="skillAmount flex list-none justify-start ml-[16rem] mt-3 font-semibold">
          <li className="html pl-9 pr-8 animate-[counter_3s_ease-out_forwards] [counter-set:_num1_var(--num1)] before:content-[counter(num1)]">%</li>
          <li className="css pl-10 pr-7 animate-[counter_4s_ease-out_forwards] [counter-set:_num2_var(--num2)] before:content-[counter(num2)]">%</li>
          <li className="js pl-10 pr-6 animate-[counter_3s_ease-out_forwards] [counter-set:_num3_var(--num3)] before:content-[counter(num3)]">%</li>
          <li className="react pl-10 pr-7 animate-[counter_5s_ease-out_forwards] [counter-set:_num4_var(--num4)] before:content-[counter(num4)]">%</li>
          <li className="tailwind pl-10 pr-5 animate-[counter_2.5s_ease-out_forwards] [counter-set:_num5_var(--num5)] before:content-[counter(num5)]">%</li>
          <li className="flutter pl-10 animate-[counter_3.5s_ease-out_forwards] [counter-set:_num6_var(--num6)] before:content-[counter(num6)]">%</li>
        </div>
      </div>
    </>
  );
}
