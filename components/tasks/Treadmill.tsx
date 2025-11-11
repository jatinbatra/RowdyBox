import React, { useState } from 'react';

interface TreadmillProps {
  onAction: () => void;
}

const Treadmill: React.FC<TreadmillProps> = ({ onAction }) => {
  const [lastFoot, setLastFoot] = useState<'L' | 'R' | null>(null);
  const [nextFoot, setNextFoot] = useState<'L' | 'R'>('L');

  const handleStep = (foot: 'L' | 'R') => {
    if (foot !== lastFoot) {
      onAction();
      setLastFoot(foot);
      setNextFoot(foot === 'L' ? 'R' : 'L');
    }
  };

  const FootButton = ({ foot, isActive }: { foot: 'L' | 'R'; isActive: boolean }) => (
    <button
      onClick={() => handleStep(foot)}
      className={`w-32 h-48 md:w-40 md:h-64 border-4 rounded-3xl transition-all duration-200 flex items-center justify-center transform focus:outline-none
        ${
          isActive
            ? 'bg-fuchsia-500/30 border-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.8)] scale-105'
            : 'bg-fuchsia-500/10 border-fuchsia-500/50 hover:bg-fuchsia-500/20'
        }
      `}
    >
      <span className={`text-6xl md:text-8xl font-bold font-righteous transition-colors ${isActive ? 'text-white' : 'text-fuchsia-400/50'}`}>
        {foot}
      </span>
    </button>
  );

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-8">
      <FootButton foot="L" isActive={nextFoot === 'L'} />
      <FootButton foot="R" isActive={nextFoot === 'R'} />
    </div>
  );
};

export default Treadmill;