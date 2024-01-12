import React from "react";
import about from "../img/about.jpg";

export default function About() {
  return (
    <>
      <div className="about flex ">
        {/* <div className="aboutMain relative text-[26px] font-bold ml-[18rem] mt-[10rem] mr-[10rem]">
          About Me
        </div> */}
        <div className="flex w-[100%] h-[100vh] pl-[10rem]">
          <img
            className="aboutpic h-[28rem] w-[25rem] rounded-[10%] mt-[8rem] ml-[8rem] "
            src={about}
            alt="about"
          />
          <div className="flex-co">
            <h1 className="aboutTitle justify-center text-left text-[22px] font-bold w-[28%] pl-[8rem] mt-[12rem] text-[#5b51b1c7] ">
              About Me 💻
            </h1>
            <p className="aboutPara1 w-[60%] text-left pl-[8rem] text-[15px] mt-10">
              Hello, I am Kamal Patel, I am a full-time Front-End Developer at Akshu Soft Tech. As a Junior Front-End Developer, I possess on impressive arsenal of skills in HTML, CSS, JavaScript, React, Flutter and Tailwind.
            </p>
            <p className="aboutPara2 justify-center w-[60%] h-[30rem] text-left pl-[8rem] text-[15px] mt-2 ">
              I boast proficient front-end development skills and carry a good understanding of back-end technologies, specifically with Node.js, Express, and MongoDB.
            </p>
            {/* <p className="aboutPara2 w-[60%] h-[30rem] text-left pl-[8rem] text-base mt-2 ">
            My journey in web development is driven by a relentless curiosity, a commitment to continuous learning, and a genuine love for turning challenges into opportunities. 
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
