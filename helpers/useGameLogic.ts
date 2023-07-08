import { useState, useEffect } from "react";
import {
  determineOptimalMove,
  takeMatches,
  determineWinner,
} from "../helpers/gameLogic";
import { useGameState } from "../helpers/gameState";

const useGameLogic = () => {
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
    isOpen,
    setIsOpen,
  } = useGameState();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

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

  useEffect(() => {
    if (matchesLeft === 0) {
      const gameWinner: string = determineWinner(
        matchesPlayer1,
        matchesPlayer2
      );
      if (gameWinner === "player-1") {
        setWinner(gameWinner);
        console.log("winner is player 1");
        openModal();
      } else if (gameWinner === "player-2") {
        setWinner(gameWinner);
        console.log("winner is player 2");
        openModal();
      }
    } else if (player === 2) {
      const count: number = determineOptimalMove(matchesLeft, matchesPlayer2);
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

  return {
    matchesLeft,
    matchesPlayer1,
    matchesPlayer2,
    player2Turn,
    handleTakeMatches,
    handleRestart,
    winner,
    isOpen,
    setIsOpen,
  };
};

export default useGameLogic;
