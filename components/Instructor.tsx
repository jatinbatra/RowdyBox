
import React from 'react';

interface InstructorProps {
  command: string;
  isLobby?: boolean;
}

const Instructor: React.FC<InstructorProps> = ({ command, isLobby = false }) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-600 flex items-center justify-center text-5xl shadow-[0_0_15px_rgba(245,158,11,0.7)]">
          🪩
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-yellow-400">
          <span className="text-yellow-400 text-lg">✨</span>
        </div>
      </div>
      <div className="p-4 bg-gray-900/50 border border-orange-500/50 rounded-lg text-center max-w-lg">
        <p className={`font-bold text-white ${isLobby ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'}`}>
          "{command}"
        </p>
      </div>
    </div>
  );
};

export default Instructor;