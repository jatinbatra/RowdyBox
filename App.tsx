import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, Round } from './types';
import { WORKOUT_ROUNDS, ROUND_DURATION } from './constants';
import PreGameLobby from './components/PreGameLobby';
import GameScreen from './components/GameScreen';
import PostGameSummary from './components/PostGameSummary';
import MusicPlayer, { MusicPlayerControls } from './components/MusicPlayer';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.NotStarted);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_DURATION);
  const [progress, setProgress] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const musicControlsRef = useRef<MusicPlayerControls>(null);

  const currentRound: Round | undefined = WORKOUT_ROUNDS[currentRoundIndex];

  const advanceRound = useCallback(() => {
    setProgress(0);
    setTimeLeft(ROUND_DURATION);
    if (currentRoundIndex < WORKOUT_ROUNDS.length - 1) {
      setCurrentRoundIndex(prev => prev + 1);
    } else {
      setGameState(GameState.Finished);
    }
  }, [currentRoundIndex]);


  useEffect(() => {
    if (gameState !== GameState.InProgress) return;

    if (timeLeft <= 0) {
      advanceRound();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft, advanceRound]);

  const startGame = () => {
    setCurrentRoundIndex(0);
    setProgress(0);
    setTimeLeft(ROUND_DURATION);
    setGameState(GameState.InProgress);
    musicControlsRef.current?.play();
  };

  const resetGame = () => {
    setGameState(GameState.NotStarted);
    musicControlsRef.current?.pause();
  };

  const handleAction = () => {
    if (gameState === GameState.InProgress) {
      setProgress(prev => prev + 1);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 200);
    }
  };

  const renderContent = () => {
    switch (gameState) {
      case GameState.InProgress:
        return currentRound ? (
          <GameScreen
            round={currentRound}
            timeLeft={timeLeft}
            progress={progress}
            onAction={handleAction}
            isShaking={isShaking}
          />
        ) : null;
      case GameState.Finished:
        return <PostGameSummary onReset={resetGame} />;
      case GameState.NotStarted:
      default:
        return <PreGameLobby onStart={startGame} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(circle,white,transparent_60%)]">
        <div className="absolute inset-[-200%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#f59e0b_50%,#a855f7_100%)]"></div>
      </div>
      <div className="absolute inset-0 bg-fuchsia-500/50 animate-flicker pointer-events-none"></div>


      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {renderContent()}
      </div>
      <MusicPlayer ref={musicControlsRef} />
    </div>
  );
};

export default App;