
import React from 'react';
import Instructor from './Instructor';
import PlayerAvatar from './PlayerAvatar';

interface PreGameLobbyProps {
  onStart: () => void;
}

const PreGameLobby: React.FC<PreGameLobbyProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-8 animate-pulse-glow">
      <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.9)]">
        ROWDYBOX
      </h1>
      <Instructor command="Get Ready to Groove! The Party Starts Soon." isLobby={true} />
      
      <div className="flex items-center justify-center space-x-4 md:space-x-8 py-4">
        <PlayerAvatar name="Player 2" isReady={true} />
        <PlayerAvatar name="You" isUser={true} isReady={true} />
        <PlayerAvatar name="Player 3" isReady={true} />
      </div>

      <p className="max-w-xl text-lg text-gray-300">
        10 groovy 30-second rounds of boxing, lifting, and running. Feel the beat, push your limits, and own the dance floor!
      </p>
      
      <button
        onClick={onStart}
        className="px-12 py-4 text-2xl font-bold text-yellow-400 bg-yellow-500/10 border-2 border-yellow-400 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.8)] transition-all duration-300 hover:bg-yellow-500/20 hover:text-white hover:scale-105 focus:outline-none"
      >
        START THE PARTY
      </button>
    </div>
  );
};

export default PreGameLobby;