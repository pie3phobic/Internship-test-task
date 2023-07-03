import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";

function Game() {
  //   const [matchesLeft, setMatchesLeft] = useState(25);
  //   const [player, setPlayer] = useState(1);
  //   const [matchesPlayer1, setMatchesPlayer1] = useState(0);
  //   const [matchesPlayer2, setMatchesPlayer2] = useState(0);
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [player, setPlayer] = useState(1);
  const [matchesPlayer1, setMatchesPlayer1] = useState(0);
  const [matchesPlayer2, setMatchesPlayer2] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(true); // Track the current turn of Player 1

  //   useEffect(() => {
  //     if (matchesLeft === 0) {
  //       // Game over
  //       if (matchesPlayer1 % 2 === 0) {
  //         //alert("Player 1 wins!");
  //         console.log("Player 1 wins!");
  //       } else if (matchesPlayer2 % 2 === 0) {
  //         //alert("Player 2 wins!");
  //         console.log("Player 1 wins!");
  //       } else {
  //         //alert("It's a tie!");
  //         console.log("It`s a tie!");
  //       }
  //     } else if (player === 2) {
  //       // AI's turn
  //       const count = determineOptimalMove(matchesLeft);
  //       takeMatches(count);
  //     }
  //   }, [matchesLeft, player]);

  //   //   const determineOptimalMove = (matches) => {
  //   //     // Implement your optimal strategy here
  //   //     // For example, you could use a simple rule like taking matches in multiples of 4 to force the opponent into a losing position

  //   //     const remainingMatchesMod4 = matches % 4;

  //   //     if (remainingMatchesMod4 === 0) {
  //   //       // AI cannot win in the next move, so take 1 match to prolong the game
  //   //       return 1;
  //   //     } else {
  //   //       // AI can force the opponent into a losing position
  //   //       return remainingMatchesMod4;
  //   //     }
  //   //   };
  //   const determineOptimalMove = (matches) => {};
  useEffect(() => {
    if (matchesLeft === 0) {
      // Game over
      if (matchesPlayer1 % 2 === 0) {
        console.log("Player 1 wins!");
      } else if (matchesPlayer2 % 2 === 0) {
        console.log("Player 2 wins!");
      } else {
        console.log("It's a tie!");
      }
    } else if (player === 2) {
      // AI's turn
      const count = determineOptimalMove(matchesLeft, player1Turn);
      takeMatches(count);
    }
  }, [matchesLeft, player]);

  const determineOptimalMove = (matches, player1Turn) => {
    let count;

    if (player1Turn === 1) {
      count = 3;
    } else if (player1Turn === 2) {
      count = 2;
    }
    // else if (player1Turn === 3) {
    //   count = 1;
    // } else {
    //   const remainder = (matches - 4) % 4;
    //   if (remainder === 0) {
    //     count = Math.floor(Math.random() * 3) + 1;
    //   } else if (remainder === 1) {
    //     count = 3;
    //   } else if (remainder === 2) {
    //     count = 2;
    //   } else {
    //     count = 1;
    //   }
    // }
    else {
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
  };
  return (
    <div className="bg-blue-950 text-white">
      <Header />
      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold">Matches Game</h1>
      </div>
      <div>
        <div className="flex flex-col mx-auto items-center h-[700px] w-[1200px] bg-slate-300/80 rounded-3xl mt-10">
          <div>
            <p className="text-3xl font-semibold pt-8">
              Matches Left: {matchesLeft}
            </p>
          </div>
          <div className="flex justify-between w-[700px]">
            <a>Player 1's matches: {matchesPlayer1}</a>
            <a>Player 2's matches: {matchesPlayer2}</a>
          </div>
          {matchesLeft > 0 && (
            <div>
              {player === 1 && (
                <div className="flex gap-16">
                  {/* <button onClick={() => handleTakeMatches(1)}>
                    Take 1 match
                  </button> */}
                  <div
                    className="w-[100px] h-[100px] flex justify-center align-middle bg-white rounded-3xl hover:cursor-pointer"
                    onClick={() => handleTakeMatches(1)}
                  >
                    <img src="match-stick.png" className="w-[50px]" />
                  </div>
                  <button onClick={() => handleTakeMatches(2)}>
                    Take 2 matches
                  </button>
                  <button onClick={() => handleTakeMatches(3)}>
                    Take 3 matches
                  </button>
                </div>
              )}
            </div>
          )}
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
