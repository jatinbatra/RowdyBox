import React, { useState } from 'react';

interface BarbellProps {
  onAction: () => void;
}

const Barbell: React.FC<BarbellProps> = ({ onAction }) => {
  const [isLifting, setIsLifting] = useState(false);

  const handleLift = () => {
    onAction();
    setIsLifting(true);
    setTimeout(() => setIsLifting(false), 150);
  };

  return (
    <div className="flex items-center justify-center w-full h-full cursor-pointer" onClick={handleLift}>
      <div className="relative w-80 h-40">
        {/* Rack */}
        <div className="absolute bottom-0 left-0 w-4 h-24 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-md"></div>
        <div className="absolute bottom-0 right-0 w-4 h-24 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-md"></div>

        {/* Barbell */}
        <div className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-150 ease-out ${isLifting ? 'bottom-12' : 'bottom-10'}`}>
          <div className="flex items-center">
            {/* Weight */}
            <div className="w-8 h-24 bg-orange-500 rounded-md border-2 border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
            <div className="w-4 h-20 bg-orange-600 rounded-md border-2 border-orange-500"></div>
            {/* Bar */}
            <div className="w-64 h-4 bg-gradient-to-r from-gray-400 to-gray-200"></div>
            {/* Weight */}
            <div className="w-4 h-20 bg-orange-600 rounded-md border-2 border-orange-500"></div>
            <div className="w-8 h-24 bg-orange-500 rounded-md border-2 border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barbell;