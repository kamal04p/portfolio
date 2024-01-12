import React from "react";
import spotify from "../img/Spotify_clone.png";
import quickNews from "../img/quicknewsapp.png";
import sidcup from "../img/sidcup.png";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";


export default function Portfolio() {
  return (
    <>
      <div className="pfTitle h-[195vh] px-[10rem] pt-[6rem]">
        <div className="pf-1 flex-col justify-start text-left pl-[8rem] font-semibold">
          <h1 className="text-[#5b51b1c7] pb-1 text-[22px]">Portfolio</h1>
          <p className="text-[15px] flex">
            Each project is a unique piece of development
            <span className="text-[20px] leading-[1.2rem]">🧩</span>
          </p>
        </div>
        <div className="project-1 flex">
          <img
            className="w-[35%] h-[18rem] ml-[12rem] mt-[4rem] rounded-[14px]"
            src={spotify}
            alt="spotify-clone"
          />
          <div className="song-details h-[18rem] mt-[4rem] ml-[5rem] flex-col justify-start">
            <h1 className=" font-bold ml-[4rem] mb-4 text-[#5b51b1c7] ">
              Spotify_Clone 🎵
            </h1>
            <p className="w-[15rem] ml-[4rem] text-gray-600">
              A song player website that allows user to make a playlist as per
              their choice. User can play any songs from given albums and/or by
              searching any random music from search bar.
            </p>
            <div className="project-1-lang flex gap-4 font-bold font-sans text-[14px] w-[100%] justify-center pl-16 pt-7">
              <div className="">HTML</div>
              <div className="">CSS</div>
              <div className="">JavaScript</div>
            </div>
            <div className="project-1-links flex">
              <div className="code1 flex w-[25%] h-[2rem] justify-start text-left text-[16px] ml-20 mt-7 font-semibold">
                Code
                <a href="https://www.github.com/kamal04p" target="_blank" rel="noopener noreferrer" >
                  <FaGithub className="text-[1.7rem] pl-2" />
                </a>
              </div>
              <div className="livedemo1">
                <div className="code1 flex w-[85%] h-[2rem] justify-start text-left text-[16px] ml-9 mt-7 font-semibold">
                  Live Demo
                  <a href="https://www.github.com/kamal04p" target="_blank" rel="noopener noreferrer" >
                    <IoMdOpen className="text-[1.7rem] pl-2" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="project-2 flex mt-8">
          <div className="song-details h-[18rem] mt-[4rem] ml-[12rem] flex-col justify-start">
            <h1 className=" font-bold ml-[4rem] mb-4 text-[#5b51b1c7] ">
              QuickNewsApp 📰
            </h1>
            <p className="w-[15rem] ml-[4rem] text-gray-600">
              QuickNewsApp is a news app that provides news as per different categories and countries. It allows users to explore all news in real time at one place. 
            </p>
            <div className="project-2-lang flex gap-4 font-bold font-sans text-[14px] w-[100%] justify-center pl-16 pt-7">
              <div className="">React</div>
              <div className="">Boostrap</div>
            </div>
            <div className="project-2-links flex">
              <div className="code2 flex w-[25%] h-[2rem] justify-start text-left text-[16px] ml-20 mt-7 font-semibold">
                Code
                <a href="https://www.github.com/kamal04p" target="_blank" rel="noopener noreferrer" >
                  <FaGithub className="text-[1.7rem] pl-2" />
                </a>
              </div>
              <div className="livedemo2">
                <div className="flex w-[85%] h-[2rem] justify-start text-left text-[16px] ml-9 mt-7 font-semibold">
                  Live Demo
                  <a href="https://www.github.com/kamal04p" target="_blank" rel="noopener noreferrer" >
                    <IoMdOpen className="text-[1.7rem] pl-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[35%] h-[18rem] ml-[5rem] mt-16 rounded-[14px]"
            src={quickNews}
            alt="Quick News"
          />
        </div>
        <div className="project-3 flex mt-8">
          <img
            className="w-[35%] h-[18rem] ml-[12rem] mt-16 rounded-[14px]"
            src={sidcup}
            alt="Sid Cup"
          />
          <div className="song-details h-[18rem] mt-[4rem] ml-[5rem] flex-col justify-start">
            <h1 className=" font-bold ml-[4rem] mb-4 text-[#5b51b1c7] ">
            🏌️Play Golf ⛳
            </h1>
            <p className="w-[15rem] ml-[4rem] text-gray-600">
              A song player website that allows user to make a playlist as per
              their choice. User can play any songs from given albums and/or by
              searching any random music from search bar.
            </p>
            <div className="project-3-lang flex gap-4 font-bold font-sans text-[14px] w-[100%] justify-center pl-16 pt-7">
              <div className="">HTML</div>
              <div className="">CSS</div>
            </div>
            <div className="project-3-links flex">
              <div className="code1 flex w-[25%] h-[2rem] justify-start text-left text-[16px] ml-20 mt-7 font-semibold">
                Code
                <a href="https://www.github.com/kamal04p" target="_blank" rel="noopener noreferrer" >
                  <FaGithub className="text-[1.7rem] pl-2" />
                </a>
              </div>
              <div className="livedemo3">
                <div className="code3 flex w-[85%] h-[2rem] justify-start text-left text-[16px] ml-9 mt-7 font-semibold">
                  Live Demo
                  <a href="https://www.github.com/kamal04p" target="_blank" rel="noopener noreferrer" >
                    <IoMdOpen className="text-[1.7rem] pl-2" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
