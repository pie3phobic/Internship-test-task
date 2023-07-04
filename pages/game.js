import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTimeoutFn } from "react-use";
import Confetti from "react-confetti";

function Game() {
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [player, setPlayer] = useState(1);
  const [matchesPlayer1, setMatchesPlayer1] = useState(0);
  const [matchesPlayer2, setMatchesPlayer2] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(0); // Track the current turn of Player 1
  const [player2Turn, setPlayer2Turn] = useState(0);
  const [winner, setWinner] = useState("");
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  useEffect(() => {
    if (matchesLeft === 0) {
      // Game over
      if (matchesPlayer1 % 2 === 0) {
        console.log("Player 1 wins!");
        setWinner("player-1");
      } else if (matchesPlayer2 % 2 === 0) {
        console.log("Player 2 wins!");
        setWinner("player-2");
      } else {
        console.log("It's a tie!");
      }
    } else if (player === 2) {
      // AI's turn
      const count = determineOptimalMove(matchesLeft, player1Turn);
      setIsShowing(false);
      resetIsShowing();
      takeMatches(count);
    }
  }, [matchesLeft, player]);

  const determineOptimalMove = (matches, player1Turn) => {
    let count;

    if (player1Turn === 1) {
      count = 3;
    } else if (player1Turn === 2) {
      count = 2;
    } else {
      count = 1;
    }
    return count;
  };
  const takeMatches = (count) => {
    if (matchesLeft - count >= 0) {
      setMatchesLeft(matchesLeft - count);

      if (player === 1) {
        setMatchesPlayer1(matchesPlayer1 + count);
        setPlayer1Turn(count);
        setPlayer(2);
      } else {
        setMatchesPlayer2(matchesPlayer2 + count);
        setPlayer2Turn(count);
        setPlayer(1);
      }
    }
  };

  const handleTakeMatches = (count) => {
    if (matchesLeft > 0 && player === 1) {
      takeMatches(count);
    }
  };
  const handleRestart = () => {
    setMatchesLeft(25);
    setPlayer(1);
    setMatchesPlayer1(0);
    setMatchesPlayer2(0);
    setPlayer1Turn(0);
    setPlayer2Turn(0);
    setWinner("player-0");
  };
  return (
    <div className="bg-blue-950 text-white">
      <Header />
      <div className="flex justify-center">
        {winner === "player-1" && <Confetti width={1400} height={800} />}
        <h1 className="text-4xl font-semibold">Matches Game</h1>
      </div>
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
                Player 1's matches: {matchesPlayer1}
              </a>
              <div className="">
                <div className="flex gap-4 bg-slate-400 w-[500px] rounded-3xl px-10 py-32">
                  <div
                    className="w-32 h-32 flex justify-center align-middle rounded-md bg-white shadow-lg hover:cursor-pointer hover:scale-105 transform transition duration-200 ease-out"
                    onClick={() => handleTakeMatches(1)}
                  >
                    <img src="1-match-stick.png" className="w-[50px]" />
                  </div>
                  <div
                    className="w-32 h-32 flex justify-center align-middle rounded-md bg-white shadow-lg hover:cursor-pointer hover:scale-105 transform transition duration-200 ease-out"
                    onClick={() => handleTakeMatches(2)}
                  >
                    <img src="2-match-stick.png" className="w-[70px]" />
                  </div>
                  <div
                    className="w-32 h-32 flex justify-center align-middle rounded-md bg-white shadow-lg hover:cursor-pointer hover:scale-105 transform transition duration-200 ease-out"
                    onClick={() => handleTakeMatches(3)}
                  >
                    <img
                      src="3-match-stick.png"
                      className="w-[90px] h-[120px] py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <a className="text-2xl font-semibold mb-6">
                Player 2's matches: {matchesPlayer2}
              </a>
              <div className="flex flex-col items-center rounded-3xl w-[500px] bg-slate-400 px-10 py-32">
                <div className="h-32 w-32">
                  <Transition
                    as={Fragment}
                    show={isShowing}
                    enter="transform block transition duration-[400ms]"
                    enterFrom="opacity-100 rotate-[-120deg] scale-50"
                    enterTo="opacity-100 rotate-0 scale-100"
                    //leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-0 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                  >
                    <div className="h-full w-full rounded-md bg-white shadow-lg flex justify-center align-middle">
                      <img
                        src={`${player2Turn}-match-stick.png`}
                        className="rounded-md"
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
    </div>
  );
}

export default Game;
