import { useState } from "react";

export function useGameState() {
  const [player, setPlayer] = useState<number>(1);
  const [matchesPlayer1, setMatchesPlayer1] = useState<number>(0);
  const [matchesPlayer2, setMatchesPlayer2] = useState<number>(0);
  const matchesLeft = 25 - matchesPlayer1 - matchesPlayer2;
  const [player1Turn, setPlayer1Turn] = useState<number>(0);
  const [player2Turn, setPlayer2Turn] = useState<number>(0);
  const [winner, setWinner] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return {
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
  };
}
