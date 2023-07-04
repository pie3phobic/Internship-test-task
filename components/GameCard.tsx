import React from "react";

function GameCard() {
  return (
    <div className="flex flex-col items-center bg-special-gray pt-6 w-[200px] rounded-2xl hover:scale-105 transform transition duration-200 ease-out">
      <img src="other-games-1.png" className="w-[160px]" />
      <div className="flex gap-6">
        <div>
          <p className="text-white font-semibold">Word Mania</p>
          <p className="font-light text-white">By Gameland</p>
        </div>
        <div className="bg-purple-accent h-10 w-10 rounded-full"></div>
      </div>
    </div>
  );
}

export default GameCard;
