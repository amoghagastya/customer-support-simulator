import React from "react";
import { UltravoxExperimentalMessageEvent } from "ultravox-client";

interface DebugMessagesProps {
  debugMessages: UltravoxExperimentalMessageEvent[];
}

const DebugMessages: React.FC<DebugMessagesProps> = ({ debugMessages }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            defaultChecked={true}
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span className="text-sm font-medium text-white">Debug View</span>
      </div>

      <div className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
        {debugMessages.map((message, index) => (
          <div key={index} className="mb-2">
            {JSON.stringify(message, null, 2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebugMessages;
