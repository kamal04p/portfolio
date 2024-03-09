import React from "react";
import about from "../img/about.jpg";

export default function About(props) {
  
  return (
    <div id="about">
      <div className="about">
        <div className="about-all flex w-[100%] h-[80vh] pl-[10rem]">
          <img
            className="aboutpic h-[23rem] w-[21rem] rounded-[10%] mt-[2rem] ml-[8rem]"
            src={about}
            alt="about"
          />
          <div className="about-paras flex-col">
            <h1 className="aboutTitle w-auto justify-center text-left text-[22px] font-bold  pl-[8rem] pt-[6rem] text-[#5b51b1c7] ">
              About Me 👨‍🚀
            </h1>
            <p className="aboutPara1 w-[70%] text-left pl-[8rem] text-[15px] pt-10">
              Greetings! 🙏🏼I'm <strong>Kamal</strong>, I am a full-time Front-end Developer at
              Kenna.
            </p>
            <p className="aboutPara2 justify-center w-[70%] h-[30rem] text-left pl-[8rem] text-[15px] pt-8">
              I have experience working with <strong>React and Flutter</strong>. I love to create
              things, be it Software or Art. Beyond the dark screen, I
              cultivate balance through fitness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
