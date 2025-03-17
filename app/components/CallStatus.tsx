'use client';

import React from 'react';

interface CallStatusProps {
  isCallActive: boolean;
  agentStatus: string;
  onStartCall: () => void;
  onEndCall: () => void;
}

const CallStatus: React.FC<CallStatusProps> = ({
  isCallActive,
  agentStatus,
  onStartCall,
  onEndCall,
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={isCallActive ? onEndCall : onStartCall}
          className={`px-6 py-3 rounded-lg font-semibold ${
            isCallActive
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isCallActive ? 'End Training Call' : 'Start Training Call'}
        </button>
        <span className="text-gray-600">
          Status: <span className="font-semibold">{agentStatus}</span>
        </span>
      </div>
      {!isCallActive && (
        <p className="text-sm text-gray-500">
          Select a customer scenario and click "Start Training Call" to begin the simulation.
        </p>
      )}
    </div>
  );
};

export default CallStatus;