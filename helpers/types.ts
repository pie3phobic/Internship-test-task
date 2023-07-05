export type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};
export interface GameBoardProps {
  matchesLeft: number;
  matchesPlayer1: number;
  matchesPlayer2: number;
  handleTakeMatches: (numMatches: number) => void;
  isShowing: boolean;
  player2Turn: number;
  handleRestart: () => void;
}
export interface CustomGameBoardProps extends GameBoardProps {
  m: number;
  n: number;
}
export interface GameCardProps {
  src: string;
  name: string;
  author: string;
}
