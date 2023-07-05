import React from "react";
import { PlayIcon } from "@heroicons/react/solid";

function GameCard({ src, name, author }) {
  return (
    <div className="flex flex-col items-center bg-special-gray pt-6 w-[200px] rounded-2xl hover:scale-105 transform transition duration-200 ease-out">
      <img src={src} className="w-[170px] pb-4" />
      <div className="flex gap-6">
        <div className="pb-6">
          <p className="text-white font-semibold">{name}</p>
          <p className="font-light text-white">By {author}</p>
        </div>
        <PlayIcon className="text-purple-accent h-9 mt-1" />
      </div>
    </div>
  );
}

export default GameCard;
