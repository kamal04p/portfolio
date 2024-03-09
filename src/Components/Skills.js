import React from 'react'

export default function Skills() {
  return (
    <>
     <div className="skillSet h-[50vh] flex-col justify-center text-left w-[100%]">
        <h1 className='skills-Title w-[80%] flex justify-start font-semibold text-xl pl-[18rem] text-[#5b51b1c7]'>Technical Skills 👨‍💻</h1>
        <div className='skills flex justify-start h-[10vh] w-auto ml-[18rem] mt-12'>
            <div className="skillSet1 w-[15rem] h-12 px-4 my-2 mx-6 pt-[9px] rounded-[25px] border-2 border-slate-500 border-solid">⚙️ React</div>
            <div className="skillSet2 w-[15rem] h-12 px-4 my-2 mx-6 pt-[9px] rounded-[25px] border-2 border-slate-500 border-solid">🧲 Tailwind CSS</div>
            <div className="skillSet3  w-[15rem]  h-12 px-4 my-2 mx-6 pt-[9px] rounded-[25px] border-2 border-slate-500 border-solid">💡 Boostrap</div>
            <div className="skillSet4  w-[15rem]  h-12 px-4 my-2 mx-6 pt-[9px] rounded-[25px] border-2 border-slate-500 border-solid">⚡ Node.Js</div>
            <div className="skillSet5  w-[15rem]  h-12 px-4 my-2 mx-6 pt-[9px] rounded-[25px] border-2 border-slate-500 border-solid">🔨 Express</div>
            <div className="skillSet6  w-[15rem] h-12 px-4 my-2 mx-6 pt-[9px] rounded-[25px] border-2 border-slate-500 border-solid">🔩 MongoDB</div>
        </div>
        </div> 
    </>
  )
}
