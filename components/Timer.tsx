
import React from 'react';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const isUrgent = timeLeft <= 5;

  return (
    <div className={`flex items-center justify-center w-24 h-12 rounded-lg border-2 bg-black/50 ${isUrgent ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'border-yellow-500'}`}>
      <span className={`font-mono text-3xl font-bold ${isUrgent ? 'text-red-500 animate-pulse' : 'text-yellow-400'}`}>
        0:{timeLeft.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;