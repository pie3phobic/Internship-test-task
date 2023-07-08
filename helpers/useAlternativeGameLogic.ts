import { useState, useEffect } from "react";
import {
  determineOptimalMove,
  takeMatches,
  determineWinner,
} from "../helpers/gameLogic";
const useAlternativeGameLogic = () => {
  const [player, setPlayer] = useState<number>(2);
  const [matchesPlayer1, setMatchesPlayer1] = useState<number>(0);
  const [matchesPlayer2, setMatchesPlayer2] = useState<number>(0);
  const matchesLeft = 25 - matchesPlayer1 - matchesPlayer2;
  const [player1Turn, setPlayer1Turn] = useState<number>(0);
  const [player2Turn, setPlayer2Turn] = useState<number>(0);
  const [winner, setWinner] = useState<string>("");
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      if (gameWinner === "player-1" || gameWinner === "player-2") {
        setWinner(gameWinner);
        openModal();
      }
    } else if (player === 2) {
      if (player2Turn === 0) {
        takeMatches(
          1,
          player,
          setMatchesPlayer1,
          setMatchesPlayer2,
          setPlayer1Turn,
          setPlayer2Turn,
          setPlayer
        );
      } else {
        const count: number = determineOptimalMove(matchesLeft, matchesPlayer2);
        setIsShowing(false);
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
    setPlayer(2);
    setMatchesPlayer1(0);
    setMatchesPlayer2(0);
    setPlayer1Turn(0);
    setPlayer2Turn(0);
    setWinner("");
  };

  return {
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
    isShowing,
    setIsShowing,
  };
};

export default useAlternativeGameLogic;
