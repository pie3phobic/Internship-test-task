import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CustomGameBoardProps } from "../helpers/types";
import RestartButton from "./RestartButton";
const CustomGameBoard: React.FC<CustomGameBoardProps> = ({
  matchesLeft,
  matchesPlayer1,
  matchesPlayer2,
  handleTakeMatches,
  isShowing,
  player2Turn,
  handleRestart,
  m,
}) => {
  return (
    <div>
      <div className="flex flex-col mx-auto items-center w-full md:w-[1200px] bg-slate-300/80 rounded-3xl mt-10">
        <div>
          <p className="text-3xl font-semibold pt-8">
            Matches Left: {matchesLeft}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-20 pt-8">
          <div className="flex flex-col items-center">
            <a className="text-2xl font-semibold mb-6">
              Your matches: {matchesPlayer1}
            </a>
            <div className="">
              <div className="grid gap-6 grid-cols-3 bg-purple-accent/40 w-[500px] rounded-3xl px-10 py-20">
                {Array.from({ length: m }).map((_, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 flex justify-center rounded-md bg-white shadow-lg hover:cursor-pointer hover:scale-105 transform transition duration-200 ease-out first:px-10"
                    onClick={() => handleTakeMatches(index + 1)}
                  >
                    <img
                      src={`${index + 1}-match-stick.png`}
                      className="w-[100px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <a className="text-2xl font-semibold mb-6">
              Bot&apos;s matches: {matchesPlayer2}
            </a>
            <div className="flex flex-col items-center rounded-3xl w-[500px] bg-purple-accent/40 flex-1 px-10 justify-center">
              <div className="h-32 w-32">
                <Transition
                  as={Fragment}
                  show={isShowing}
                  enter="transform block transition duration-[400ms]"
                  enterFrom="opacity-100 rotate-[-120deg] scale-50"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leaveFrom="opacity-0 rotate-0 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                >
                  <div className="h-full w-full rounded-md bg-white shadow-lg flex justify-center align-middle">
                    <img
                      src={`${player2Turn}-match-stick.png`}
                      className="rounded-md"
                      alt={`${player2Turn} match stick`}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
        <RestartButton handleRestart={handleRestart} />
      </div>
    </div>
  );
};

export default CustomGameBoard;
