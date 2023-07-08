export const determineOptimalMove = (
  matches: number,
  matchesPlayer2: number
): number => {
  if (matches === 1) {
    return 1;
  } else if (matches === 2 && matchesPlayer2 % 2 === 0) {
    return 2;
  } else if (matches === 2 && matchesPlayer2 % 2 === 1) {
    return 1;
  } else if (matches % 4 === 0) {
    return 3;
  } else if (matches % 4 === 1) {
    return 1;
  } else {
    return 3;
  }
};

export const determineOptimalMoveCustom = (
  matches: number,
  matchesPlayer2: number,
  m: number
): number => {
  let count: number;
  const nimSum = matches ^ matchesPlayer2;

  if (nimSum === 0) {
    count = Math.floor(Math.random() * m) + 1;
  } else {
    const highestBit = Math.floor(Math.log2(nimSum));
    const highestBitValue = 1 << highestBit;
    const reducedMatches = matches - highestBitValue;

    if (reducedMatches <= 0) {
      count = Math.min(matches, m);
    } else {
      count = Math.min(reducedMatches, m);
    }
  }

  return count;
};

export const takeMatches = (
  count: number,
  player: number,
  setMatchesPlayer1: React.Dispatch<React.SetStateAction<number>>,
  setMatchesPlayer2: React.Dispatch<React.SetStateAction<number>>,
  setPlayer1Turn: React.Dispatch<React.SetStateAction<number>>,
  setPlayer2Turn: React.Dispatch<React.SetStateAction<number>>,
  setPlayer: React.Dispatch<React.SetStateAction<number>>
): void => {
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
