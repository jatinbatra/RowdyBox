import React from 'react';

const UserDancer: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <style>
      {`
        .user-dancer-arm-right { animation: user-dance-arm-right 1s ease-in-out infinite alternate; transform-origin: 50px 45px; }
        .user-dancer-arm-left { animation: user-dance-arm-left 1s ease-in-out infinite alternate; transform-origin: 50px 45px; }
        .user-dancer-leg-right { animation: user-dance-leg-right 1s ease-in-out infinite alternate; transform-origin: 50px 65px; }
        .user-dancer-leg-left { animation: user-dance-leg-left 1s ease-in-out infinite alternate; transform-origin: 50px 65px; }
        .user-dancer-head { animation: user-dance-head 1s ease-in-out infinite alternate; transform-origin: 50px 30px; }

        @keyframes user-dance-arm-right { from { transform: rotate(20deg); } to { transform: rotate(-30deg); } }
        @keyframes user-dance-arm-left { from { transform: rotate(-20deg); } to { transform: rotate(30deg); } }
        @keyframes user-dance-leg-right { from { transform: rotate(5deg) translateX(2px); } to { transform: rotate(-5deg) translateX(-2px); } }
        @keyframes user-dance-leg-left { from { transform: rotate(-5deg) translateX(-2px); } to { transform: rotate(5deg) translateX(2px); } }
        @keyframes user-dance-head { from { transform: translateY(-2px); } to { transform: translateY(2px); } }
      `}
    </style>
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
      {/* Head */}
      <circle cx="50" cy="30" r="10" className="user-dancer-head" />
      {/* Body */}
      <path d="M50 40 V 65" />
      {/* Arms */}
      <path d="M50 45 L 30 55" className="user-dancer-arm-left" />
      <path d="M50 45 L 70 55" className="user-dancer-arm-right" />
      {/* Legs */}
      <path d="M50 65 L 40 85" className="user-dancer-leg-left" />
      <path d="M50 65 L 60 85" className="user-dancer-leg-right" />
    </g>
  </svg>
);

export default UserDancer;
