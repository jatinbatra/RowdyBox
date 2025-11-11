import React from 'react';

const OpponentDancer: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <style>
      {`
        .opponent-dancer-arm-right { animation: opponent-dance-arm-right 1.2s ease-in-out infinite alternate; transform-origin: 50px 45px; }
        .opponent-dancer-arm-left { animation: opponent-dance-arm-left 1.2s ease-in-out infinite alternate; transform-origin: 50px 45px; }
        .opponent-dancer-leg-right { animation: opponent-dance-leg-right 1.2s ease-in-out infinite alternate; transform-origin: 50px 65px; }
        .opponent-dancer-leg-left { animation: opponent-dance-leg-left 1.2s ease-in-out infinite alternate; transform-origin: 50px 65px; }
        .opponent-dancer-head { animation: opponent-dance-head 1.2s ease-in-out infinite alternate; transform-origin: 50px 30px; }

        @keyframes opponent-dance-arm-right { from { transform: rotate(-25deg); } to { transform: rotate(15deg); } }
        @keyframes opponent-dance-arm-left { from { transform: rotate(25deg); } to { transform: rotate(-15deg); } }
        @keyframes opponent-dance-leg-right { from { transform: rotate(-3deg) translateX(-2px); } to { transform: rotate(3deg) translateX(2px); } }
        @keyframes opponent-dance-leg-left { from { transform: rotate(3deg) translateX(2px); } to { transform: rotate(-3deg) translateX(-2px); } }
        @keyframes opponent-dance-head { from { transform: translateX(-2px); } to { transform: translateX(2px); } }
      `}
    </style>
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-fuchsia-400">
      {/* Head */}
      <circle cx="50" cy="30" r="10" className="opponent-dancer-head" />
      {/* Body */}
      <path d="M50 40 V 65" />
      {/* Arms */}
      <path d="M50 45 L 30 55" className="opponent-dancer-arm-left" />
      <path d="M50 45 L 70 55" className="opponent-dancer-arm-right" />
      {/* Legs */}
      <path d="M50 65 L 40 85" className="opponent-dancer-leg-left" />
      <path d="M50 65 L 60 85" className="opponent-dancer-leg-right" />
    </g>
  </svg>
);

export default OpponentDancer;
