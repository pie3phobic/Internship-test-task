import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useTimeoutFn } from "react-use";
import Confetti from "react-confetti";
import VictoryModal from "../components/VictoryModal";
import LossModal from "../components/LossModal";
import AlternativeGameBoard from "../components/AlternativeGameBoard";
import {
  determineOptimalMove,
  takeMatches,
  determineWinner,
} from "../helpers/gameLogic";
import useWindowSize from "react-use/lib/useWindowSize";
import useAlternativeGameLogic from "../helpers/useAlternativeGameLogic";

const AlternativeGame: React.FC = () => {
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
    closeModal,
    openModal,
  } = useAlternativeGameLogic();
  const { width } = useWindowSize();
  return (
    <div className="bg-blue-950 text-white">
      <Header />
      <div className="flex justify-center">
        {winner === "player-1" && <Confetti width={width - 50} height={800} />}
        <h1 className="text-4xl font-semibold">Matches Game</h1>
      </div>
      <AlternativeGameBoard
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

export default AlternativeGame;
