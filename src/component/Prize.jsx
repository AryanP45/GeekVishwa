import React from "react";

const Prize = () => {
  return (
    <div className="prize-main h-[60%] flex justify-center mb-[6rem]">
      <canvas id="canvas"></canvas>
      <div className="h-full w-[50%] sticky text-white flex  flex-col items-center prize-inner rounded-tl-[40px] rounded-br-[40px] pt-[2rem]">
        <div className="prize-Title flex sponsor-main-title gfg-gradient">
          <span className="text-center"> Exciting Prizes ahead!!</span>
        </div>
        <div className="flex justify-center items-center h-[100%] flex-col pb-[2rem]">
          <span className="text-[20px] font-800">Win Prizes Upto</span>
          <span className="text-[50px] font-black dollar">1000$+</span>
          <div className="prize-logo mt-[1rem] mb-[2rem] w-[50%] flex justify-center">
            <img src="/assets/prizes.png" alt="" />            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
