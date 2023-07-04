import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";

interface GameBoardProps {
  matchesLeft: number;
  matchesPlayer1: number;
  matchesPlayer2: number;
  handleTakeMatches: (numMatches: number) => void;
  isShowing: boolean;
  player2Turn: number;
  handleRestart: () => void;
}

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
              <div className="flex gap-4 bg-slate-400 w-[500px] rounded-3xl px-10 py-32">
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
              Bot's matches: {matchesPlayer2}
            </a>
            <div className="flex flex-col items-center rounded-3xl w-[500px] bg-slate-400 px-10 py-32">
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
        <button
          className="backface-visibility-hidden mt-8 flex transform items-center rounded-full bg-purple-accent bg-opacity-40 px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40"
          onClick={handleRestart}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 opacity-70">
            <path
              d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <span className="ml-3">Restart</span>
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
