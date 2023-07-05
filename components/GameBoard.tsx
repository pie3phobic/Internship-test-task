import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";
import { GameBoardProps } from "../helpers/types";
import RestartButton from "./RestartButton";
const GameBoard: React.FC<GameBoardProps> = ({
  matchesLeft,
  matchesPlayer1,
  matchesPlayer2,
  handleTakeMatches,
  isShowing,
  player2Turn,
  handleRestart,
}) => {
  return (
    <div>
      <div className="flex flex-col mx-auto items-center h-[700px] w-[1200px] bg-slate-300/80 rounded-3xl mt-10">
        <div>
          <p className="text-3xl font-semibold pt-8">
            Matches Left: {matchesLeft}
          </p>
        </div>
        <div className="flex justify-between gap-20 items-center pt-8">
          <div className="flex flex-col items-center">
            <a className="text-2xl font-semibold mb-6">
              Your matches: {matchesPlayer1}
            </a>
            <div className="">
              <div className="flex gap-4 bg-purple-accent/40 w-[500px] rounded-3xl px-10 py-32">
                <div
                  className="w-32 h-32 flex justify-center align-middle rounded-md bg-white shadow-lg hover:cursor-pointer hover:scale-105 transform transition duration-200 ease-out"
                  onClick={() => handleTakeMatches(1)}
                >
                  <img
                    src="1-match-stick.png"
                    className="w-[50px]"
                    alt="1 match stick"
                  />
                </div>
                <div
                  className="w-32 h-32 flex justify-center align-middle rounded-md bg-white shadow-lg hover:cursor-pointer hover:scale-105 transform transition duration-200 ease-out"
                  onClick={() => handleTakeMatches(2)}
                >
                  <img
                    src="2-match-stick.png"
                    className="w-[70px]"
                    alt="2 match sticks"
                  />
                </div>
                <div
                  className="w-32 h-32 flex justify-center align-middle rounded-md bg-white shadow-lg hover:cursor-pointer hover:scale-105 transform transition duration-200 ease-out"
                  onClick={() => handleTakeMatches(3)}
                >
                  <img
                    src="3-match-stick.png"
                    className="w-[90px] h-[120px] py-2"
                    alt="3 match sticks"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <a className="text-2xl font-semibold mb-6">
              Bot&apos;s matches: {matchesPlayer2}
            </a>
            <div className="flex flex-col items-center rounded-3xl w-[500px] bg-purple-accent/40 px-10 py-32">
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

export default GameBoard;
