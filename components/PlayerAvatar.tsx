import React from 'react';
import UserDancer from './characters/UserDancer';
import OpponentDancer from './characters/OpponentDancer';

interface PlayerAvatarProps {
  name: string;
  isUser?: boolean;
  isReady: boolean;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ name, isUser = false, isReady }) => {
  const borderColor = isUser ? 'border-yellow-400' : 'border-fuchsia-500';
  const shadowColor = isUser ? 'shadow-[0_0_10px_rgba(245,158,11,0.8)]' : 'shadow-[0_0_10px_rgba(217,70,239,0.8)]';

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={`relative w-24 h-24 rounded-full bg-gray-800/50 border-4 ${borderColor} ${shadowColor} flex items-center justify-center`}>
        {isUser ? <UserDancer /> : <OpponentDancer />}
        {isReady && (
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
        )}
      </div>
      <span className={`font-bold ${isUser ? 'text-yellow-400' : 'text-fuchsia-400'}`}>{name}</span>
    </div>
  );
};

export default PlayerAvatar;