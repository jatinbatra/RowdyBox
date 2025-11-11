import React from 'react';
import { Round, TaskType } from '../types';
import Instructor from './Instructor';
import Timer from './Timer';
import PunchingBag from './tasks/PunchingBag';
import Barbell from './tasks/Barbell';
import Treadmill from './tasks/Treadmill';

interface GameScreenProps {
  round: Round;
  timeLeft: number;
  progress: number;
  onAction: () => void;
  isShaking: boolean;
}

const GameScreen: React.FC<GameScreenProps> = ({ round, timeLeft, progress, onAction, isShaking }) => {
  const progressPercentage = Math.min((progress / round.target) * 100, 100);

  const getTaskInfo = () => {
    switch (round.taskType) {
      case TaskType.Punch:
        return { text: 'PUNCH', color: 'gold' };
      case TaskType.Lift:
        return { text: 'LIFT', color: 'orange' };
      case TaskType.Run:
        return { text: 'RUN', color: 'fuchsia' };
      default:
        return { text: 'ACTION', color: 'gray' };
    }
  };

  const { text, color } = getTaskInfo();
  const colorClasses = {
    gold: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500',
      text: 'text-yellow-400',
      progressBg: 'bg-yellow-500',
    },
    orange: {
      bg: 'bg-orange-500/10',
      border: 'border-orange-500',
      text: 'text-orange-400',
      progressBg: 'bg-orange-500',
    },
    fuchsia: {
      bg: 'bg-fuchsia-500/10',
      border: 'border-fuchsia-400',
      text: 'text-fuchsia-400',
      progressBg: 'bg-fuchsia-400',
    },
    gray: {
      bg: 'bg-gray-500/10',
      border: 'border-gray-500',
      text: 'text-gray-500',
      progressBg: 'bg-gray-500',
    },
  }[color];

  const renderTaskComponent = () => {
    switch(round.taskType) {
      case TaskType.Punch:
        return <PunchingBag onAction={onAction} />;
      case TaskType.Lift:
        return <Barbell onAction={onAction} />;
      case TaskType.Run:
        return <Treadmill onAction={onAction} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-between h-[90vh] min-h-[600px] p-6 bg-black/50 border border-purple-500/20 rounded-2xl backdrop-blur-sm space-y-4 ${isShaking ? 'screen-shake' : ''}`}>
      <header className="w-full flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">
          ROUND {round.roundNumber}
        </h2>
        <Timer timeLeft={timeLeft} />
      </header>
      
      <Instructor command={round.taskText} />

      <main className="flex-grow flex flex-col items-center justify-center w-full">
        {renderTaskComponent()}
      </main>

      <footer className="w-full max-w-md">
        <div className="flex justify-between items-baseline mb-1 text-lg">
          <span className={`font-bold ${colorClasses.text}`}>{text}</span>
          <span className="text-white font-mono">{progress} / {round.target}</span>
        </div>
        <div className={`w-full ${colorClasses.bg} rounded-full h-4 border ${colorClasses.border}`}>
          <div className={`${colorClasses.progressBg} h-full rounded-full transition-all duration-300 ease-out`} style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </footer>
    </div>
  );
};

export default GameScreen;