
import React from 'react';

interface PostGameSummaryProps {
  onReset: () => void;
}

const PostGameSummary: React.FC<PostGameSummaryProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 space-y-8 animate-pulse-glow">
      <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.9)]">
        GROOVE MASTER!
      </h1>
      <p className="text-2xl text-gray-200">
        Incredible moves! You dominated the dance floor for all 10 rounds.
      </p>
      
      <div className="text-yellow-400 text-6xl">
        🕺✨💃
      </div>

      <p className="max-w-md text-lg text-gray-400">
        Catch your breath, hydrate, and get ready for the next set. The beat never stops!
      </p>

      <button
        onClick={onReset}
        className="px-12 py-4 text-2xl font-bold text-fuchsia-400 bg-fuchsia-500/10 border-2 border-fuchsia-400 rounded-lg shadow-[0_0_20px_rgba(217,70,239,0.8)] transition-all duration-300 hover:bg-fuchsia-500/20 hover:text-white hover:scale-105 focus:outline-none"
      >
        DANCE AGAIN
      </button>
    </div>
  );
};

export default PostGameSummary;