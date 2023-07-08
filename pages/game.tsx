import React, { useState } from "react";
import Header from "../components/Header";
import Confetti from "react-confetti";
import GameBoard from "../components/GameBoard";
import VictoryModal from "../components/VictoryModal";
import LossModal from "../components/LossModal";
import useWindowSize from "react-use/lib/useWindowSize";
import useGameLogic from "../helpers/useGameLogic";
import { useTimeoutFn } from "react-use";

const Game: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const {
    matchesLeft,
    matchesPlayer1,
    matchesPlayer2,
    player2Turn,
    handleTakeMatches,
    handleRestart,
    winner,
    isOpen,
    setIsOpen,
  } = useGameLogic();

  const { width, height } = useWindowSize();
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

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
