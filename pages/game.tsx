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
import { useGameState } from "../helpers/gameState";
import useWindowSize from "react-use/lib/useWindowSize";
const Game: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    matchesLeft,
    player,
    setPlayer,
    matchesPlayer1,
    setMatchesPlayer1,
    matchesPlayer2,
    setMatchesPlayer2,
    player1Turn,
    setPlayer1Turn,
    player2Turn,
    setPlayer2Turn,
    winner,
    setWinner,
  } = useGameState();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (matchesLeft === 0) {
      const gameWinner: string = determineWinner(
        matchesPlayer1,
        matchesPlayer2
      );
      if (gameWinner === "player-1") {
        setWinner(gameWinner);
        openModal();
      } else if (gameWinner === "player-2") {
        setWinner(gameWinner);
        openModal();
      }
    } else if (player === 2) {
      const count: number = determineOptimalMove(matchesLeft, matchesPlayer2);
      setIsShowing(false);
      resetIsShowing();
      takeMatches(
        count,
        player,
        setMatchesPlayer1,
        setMatchesPlayer2,
        setPlayer1Turn,
        setPlayer2Turn,
        setPlayer
      );
    }
  }, [matchesLeft, player]);

  const handleTakeMatches = (count: number) => {
    if (matchesLeft > 0 && matchesLeft >= count && player === 1) {
      takeMatches(
        count,
        player,
        setMatchesPlayer1,
        setMatchesPlayer2,
        setPlayer1Turn,
        setPlayer2Turn,
        setPlayer
      );
    }
  };

  const handleRestart = () => {
    setPlayer(1);
    setMatchesPlayer1(0);
    setMatchesPlayer2(0);
    setPlayer1Turn(0);
    setPlayer2Turn(0);
    setWinner("");
  };
  const { width, height } = useWindowSize();
  return (
    <div className="bg-blue-950 text-white">
      <Header />
      <div className="flex justify-center">
        {winner === "player-1" && (
          <Confetti width={width - 50} height={height} />
        )}
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
};

export default Game;
