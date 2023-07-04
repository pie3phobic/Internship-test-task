export const determineOptimalMove = (
  matches: number,
  player1Turn: number
): number => {
  let count: number;

  if (player1Turn === 1) {
    count = 3;
  } else if (player1Turn === 2) {
    count = 2;
  } else {
    count = 1;
  }

  return count;
};

export const takeMatches = (
  count: number,
  player: number,
  setMatchesLeft: React.Dispatch<React.SetStateAction<number>>,
  setMatchesPlayer1: React.Dispatch<React.SetStateAction<number>>,
  setMatchesPlayer2: React.Dispatch<React.SetStateAction<number>>,
  setPlayer1Turn: React.Dispatch<React.SetStateAction<number>>,
  setPlayer2Turn: React.Dispatch<React.SetStateAction<number>>,
  setPlayer: React.Dispatch<React.SetStateAction<number>>
): void => {
  setMatchesLeft((prevMatchesLeft: number) => prevMatchesLeft - count);

  if (player === 1) {
    setMatchesPlayer1(
      (prevMatchesPlayer1: number) => prevMatchesPlayer1 + count
    );
    setPlayer1Turn(count);
    setPlayer(2);
  } else {
    setMatchesPlayer2(
      (prevMatchesPlayer2: number) => prevMatchesPlayer2 + count
    );
    setPlayer2Turn(count);
    setPlayer(1);
  }
};

export const determineWinner = (
  matchesPlayer1: number,
  matchesPlayer2: number
): string => {
  if (matchesPlayer1 % 2 === 0) {
    return "player-1";
  } else if (matchesPlayer2 % 2 === 0) {
    return "player-2";
  } else {
    return "";
  }
};
