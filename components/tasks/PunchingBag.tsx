import React, { useState } from 'react';

interface PunchingBagProps {
  onAction: () => void;
}

const PunchingBag: React.FC<PunchingBagProps> = ({ onAction }) => {
  const [hit, setHit] = useState(false);

  const handlePunch = () => {
    onAction();
    setHit(true);
    setTimeout(() => setHit(false), 100);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-12 w-1 bg-gradient-to-b from-yellow-600 to-yellow-800"></div>
        <div
          onClick={handlePunch}
          aria-label="Punch the bag"
          role="button"
          className={`w-48 h-72 bg-gray-800 border-4 border-yellow-700 rounded-b-3xl rounded-t-lg cursor-pointer transition-transform duration-100 relative overflow-hidden select-none active:scale-105 active:rotate-3 ${hit ? 'scale-102 rotate-[-3deg]' : 'scale-100'}`}
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-yellow-600 rounded-b-md"></div>
           <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent"></div>
           <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 h-16 rounded-full border-4 border-yellow-500/50 flex items-center justify-center">
             <span className="text-yellow-400 font-righteous text-2xl tracking-widest opacity-80">ROWDY</span>
           </div>
        </div>
        {hit && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-yellow-300 animate-ping opacity-75 pointer-events-none">💥</div>
        )}
      </div>
    </div>
  );
};

export default PunchingBag;