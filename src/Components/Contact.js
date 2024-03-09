import React from "react";
// import question from "../img/question.png";
import selfo from "../img/selfo.jpg";
// import send from "../img/send.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

export default function Contact() {
  return (
    <div id="contact">
      <div className="contact h-[70vh]" id="contact">
        <h1 className="contactTitle text-left ml-[18rem] text-[#5b51b1c7]  font-semibold text-[24px]">
          Work with me 🌐🖱️
        </h1>
        <p className="contact-para text-left ml-[18rem] text-[16px] mt-10">
          If you're interested in working with me,
          <button className="cursor-auto">Drop me a Message! 👇</button>
        </p>
        <div className="contact-pic flex mt-8 absolute">
          <img
            src={selfo}
            alt="profilePic"
            className="send h-[14rem] w-[12rem] rounded-[50%]  ml-[20rem] mt-4 opacity-[0.9]"
          />
          <div className="contact-details">
            <h1 className="contact-name text-[18px] pt-10 pl-[8rem] text-left font-semibold">
              Kamal
            </h1>
            <p className="contact-email ml-[8rem] mt-[24px] h-[15px] w-[56%] text-left text-[18px]">
              kamal04p@gmail.com
            </p>
          </div>
        </div>
        <div className="contacts flex justify-center h-[8vh] w-[50%] ml-[36rem] relative mt-[12rem]">
          <a
            href="https://www.linkedin.com/in/kamal-patel04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact1 flex w-22 h-12 px-8 my-2 mx-2 pt-[10px] rounded-[20px] border-2 border-slate-500 border-solid cursor-pointer">
              <FaLinkedin className="pr-2 h-6 w-6" />
              LinkedIn
            </div>
          </a>
          <a
            href="https://www.github.com/kamal04p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact3 flex w-22 h-12 px-8 my-2 mx-2 pt-[10px] rounded-[20px] border-2 border-slate-500 border-solid cursor-pointer">
              <FaGithub className="pr-2 h-6 w-6" />
              GitHub
            </div>
          </a>
          <a
            href="https://www.x.com/kamal04p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact2 flex w-22 h-12 px-8 my-2 mx-2 pt-[10px] rounded-[20px] border-2 border-slate-500 border-solid cursor-pointer">
              <FaSquareXTwitter className="pr-2 h-6 w-6" />
              Twitter
            </div>
          </a>
          <a
            href="https://www.discordapp.com/users/i___kam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact4 flex w-22 h-12 px-8 my-2 mx-2 pt-[10px] rounded-[20px] border-2 border-slate-500 border-solid cursor-pointer">
              <BsDiscord className="pr-2 h-6 w-6" /> Discord
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
