import React from "react";

interface RestartButtonProps {
  handleRestart: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ handleRestart }) => {
  return (
    <button
      className="backface-visibility-hidden mt-8 flex transform items-center rounded-full bg-purple-accent bg-opacity-40 px-5 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40 mb-6"
      onClick={handleRestart}
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 opacity-70">
        <path
          d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <span className="ml-3 text-2xl">Restart</span>
    </button>
  );
};

export default RestartButton;

