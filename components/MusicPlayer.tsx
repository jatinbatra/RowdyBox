import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { playlist } from '../audio/tracks';

export interface MusicPlayerControls {
  play: () => void;
  pause: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerControls>((_props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      setIsPlaying(true);
    },
    pause: () => {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    },
  }));

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };
  
  const onEnded = () => {
    handleNext();
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => {
      const newIndex = (prev + 1) % playlist.length;
      if (audioRef.current) {
        audioRef.current.src = playlist[newIndex].src;
      }
      return newIndex;
    });
    setProgress(0);
    setIsPlaying(true);
  };
  
  const handlePrev = () => {
     setCurrentTrackIndex((prev) => {
      const newIndex = (prev - 1 + playlist.length) % playlist.length;
      if (audioRef.current) {
        audioRef.current.src = playlist[newIndex].src;
      }
      return newIndex;
    });
    setProgress(0);
    setIsPlaying(true);
  };

  const currentTrack = playlist[currentTrackIndex];

  return (
    <div className="absolute bottom-4 right-4 z-20 w-64 p-3 bg-gray-900/80 border border-orange-500/50 rounded-lg backdrop-blur-sm hidden md:block">
      <audio 
        ref={audioRef} 
        src={currentTrack.src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-12c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 9l12-3" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-white truncate">{currentTrack.title}</p>
          <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
        </div>
        <div className="flex items-center space-x-1 text-yellow-400">
           <button onClick={handlePrev} className="p-1 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8.447 14.832A1 1 0 0010 14V6a1 1 0 00-1.553-.832l-4 4a1 1 0 000 1.664l4 4z" /><path d="M14.447 14.832A1 1 0 0016 14V6a1 1 0 00-1.553-.832l-4 4a1 1 0 000 1.664l4 4z" /></svg></button>
          <button onClick={handlePlayPause} className="p-1 hover:text-white transition-colors">
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            )}
          </button>
          <button onClick={handleNext} className="p-1 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5.553 5.168A1 1 0 004 6v8a1 1 0 001.553.832l4-4a1 1 0 000-1.664l-4-4z" /><path d="M11.553 5.168A1 1 0 0010 6v8a1 1 0 001.553.832l4-4a1 1 0 000-1.664l-4-4z" /></svg></button>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-700 rounded-full mt-2">
        <div className="h-1 bg-yellow-500 rounded-full" style={{ width: `${progress || 0}%` }}></div>
      </div>
    </div>
  );
});

export default MusicPlayer;