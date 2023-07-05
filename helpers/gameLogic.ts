export const determineOptimalMove = (
  matches: number,
  matchesPlayer2: number,
  player1Turn: number
): number => {
  let count: number;

  if (matches <= 5) {
    if (matchesPlayer2 % 2 === 0 && matches >= 2) {
      count = 2;
    } else if (matchesPlayer2 % 2 === 1 && matches === 4) {
      count = 3;
    } else if (matchesPlayer2 % 2 === 1 && matches === 3) {
      count = 3;
    } else if (matchesPlayer2 % 2 === 1 && matches === 5) {
      count = 3;
    } else if (matchesPlayer2 % 2 === 1 && matches === 2) {
      count = 1;
    } else if (matchesPlayer2 % 2 === 1 && matches === 1) {
      count = 1;
    } else count = matches;
  } else {
    if (player1Turn === 1) {
      count = 3;
    } else if (player1Turn === 2) {
      count = 2;
    } else {
      count = 1;
    }
  }

  return count;
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
