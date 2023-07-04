export const determineOptimalMove = (matches, player1Turn) => {
  let count;

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
  count,
  player,
  setMatchesLeft,
  setMatchesPlayer1,
  setMatchesPlayer2,
  setPlayer1Turn,
  setPlayer2Turn,
  setPlayer
) => {
  setMatchesLeft((prevMatchesLeft) => prevMatchesLeft - count);

  if (player === 1) {
    setMatchesPlayer1((prevMatchesPlayer1) => prevMatchesPlayer1 + count);
    setPlayer1Turn(count);
    setPlayer(2);
  } else {
    setMatchesPlayer2((prevMatchesPlayer2) => prevMatchesPlayer2 + count);
    setPlayer2Turn(count);
    setPlayer(1);
  }
};

export const determineWinner = (matchesPlayer1, matchesPlayer2) => {
  if (matchesPlayer1 % 2 === 0) {
    return "player-1";
  } else if (matchesPlayer2 % 2 === 0) {
    return "player-2";
  } else {
    return "";
  }
};
