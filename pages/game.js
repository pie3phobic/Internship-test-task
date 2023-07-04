import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useTimeoutFn } from "react-use";
import Confetti from "react-confetti";
import VictoryModal from "../components/VictoryModal";
import LossModal from "../components/LossModal";
import GameBoard from "../components/GameBoard";
import {
  determineOptimalMove,
  takeMatches,
  determineWinner,
} from "../helpers/gameLogic";

function Game() {
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [player, setPlayer] = useState(1);
  const [matchesPlayer1, setMatchesPlayer1] = useState(0);
  const [matchesPlayer2, setMatchesPlayer2] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(0);
  const [player2Turn, setPlayer2Turn] = useState(0);
  const [winner, setWinner] = useState("");
  const [isShowing, setIsShowing] = useState(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (matchesLeft === 0) {
      // Game over
      const gameWinner = determineWinner(matchesPlayer1, matchesPlayer2);
      if (gameWinner === "player-1") {
        console.log("Player 1 wins!");
        setWinner(gameWinner);
        openModal();
      } else if (gameWinner === "player-2") {
        console.log("Player 2 wins!");
        setWinner(gameWinner);
        openModal();
      }
    } else if (player === 2) {
      // AI's turn
      const count = determineOptimalMove(matchesLeft, player1Turn);
      setIsShowing(false);
      resetIsShowing();
      takeMatches(
        count,
        player,
        setMatchesLeft,
        setMatchesPlayer1,
        setMatchesPlayer2,
        setPlayer1Turn,
        setPlayer2Turn,
        setPlayer
      );
    }
  }, [matchesLeft, player]);

  const handleTakeMatches = (count) => {
    if (matchesLeft > 0 && player === 1) {
      takeMatches(
        count,
        player,
        setMatchesLeft,
        setMatchesPlayer1,
        setMatchesPlayer2,
        setPlayer1Turn,
        setPlayer2Turn,
        setPlayer
      );
    }
  };

  const handleRestart = () => {
    setMatchesLeft(25);
    setPlayer(1);
    setMatchesPlayer1(0);
    setMatchesPlayer2(0);
    setPlayer1Turn(0);
    setPlayer2Turn(0);
    setWinner("");
  };

  return (
    <div className="bg-blue-950 text-white">
      <Header />
      <div className="flex justify-center">
        {winner === "player-1" && <Confetti width={1400} height={800} />}
        <h1 className="text-4xl font-semibold">Matches Game</h1>
      </div>
      <GameBoard
        matchesLeft={matchesLeft}
        matchesPlayer1={matchesPlayer1}
        matchesPlayer2={matchesPlayer2}
        player2Turn={player2Turn}
        handleTakeMatches={handleTakeMatches}
        isShowing={isShowing}
        handleRestart={handleRestart}
      />
      {winner === "player-1" && (
        <VictoryModal isOpen={isOpen} closeModal={closeModal} />
      )}
      {winner === "player-2" && (
        <LossModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Game;
