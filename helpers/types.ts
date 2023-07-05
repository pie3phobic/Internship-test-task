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
