'use client';
import { useRef, useState } from 'react';
import CallStatus from './components/CallStatus';
import PersonaSelector from './components/PersonaSelector';
import { demoConfig, personas } from './demo-config';
import { endCall, startCall } from '@/lib/callFunctions';
import { CallConfig } from '@/lib/types';
import { UltravoxExperimentalMessageEvent } from 'ultravox-client';
import DebugMessages from './components/DebugMessages';

export default function Home() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [agentStatus, setAgentStatus] = useState<string>('off');
  const [callTranscript, setCallTranscript] = useState<any[] | null>([]);
  const [callDebugMessages, setCallDebugMessages] = useState<UltravoxExperimentalMessageEvent[]>([]);
  const transcriptContainerRef = useRef<HTMLDivElement>(null);
  const [showDebug, setShowDebug] = useState(true);

  const handlePersonaChange = (personaKey: string) => {
    if (demoConfig.callConfig && personaKey) {
      const selectedPersona = personas[personaKey as keyof typeof personas];
      console.log('Selected persona:', selectedPersona); // For debugging
      demoConfig.callConfig.systemPrompt = selectedPersona.prompt;
      demoConfig.callConfig.voice = selectedPersona.voice;
    }
  };

  const handleStartCallButtonClick = async () => {
    try {
      handleStatusChange('Connecting to simulated customer...');
      setCallTranscript(null);
      setCallDebugMessages([]);

      let callConfig: CallConfig = {
        ...demoConfig.callConfig,
      };

      await startCall({
        onStatusChange: (status: string | undefined) => handleStatusChange(status || 'Unknown status'),
        onTranscriptChange: (transcripts: any[] | undefined) => setCallTranscript(transcripts || []),
        onDebugMessage: (message: UltravoxExperimentalMessageEvent) => setCallDebugMessages(prev => [...prev, message])
      }, callConfig);
      
      setIsCallActive(true);
      handleStatusChange('Customer connected - Training session active');
    } catch (error) {
      handleStatusChange(`Connection failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleEndCallButtonClick = async () => {
    try {
      handleStatusChange('Ending call...');
      await endCall();
      setIsCallActive(false);
      handleStatusChange('Call ended successfully');
    } catch (error) {
      handleStatusChange(`Error ending call: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleStatusChange = (status: string) => {
    setAgentStatus(status);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-900">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-2 text-white">Customer Service Training Simulator</h1>
        <p className="text-gray-400 mb-8">
          Practice handling different customer scenarios. Select a customer type and start the training call.
          You will interact with an AI customer - respond as you would in a real support situation.
        </p>

        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8 border border-gray-700">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Training Setup</h2>
            <PersonaSelector 
              onPersonaChange={handlePersonaChange}
              disabled={isCallActive}
            />
          </div>
          
          <CallStatus
            isCallActive={isCallActive}
            agentStatus={agentStatus}
            onStartCall={handleStartCallButtonClick}
            onEndCall={handleEndCallButtonClick}
          />

          {isCallActive && (
            <div className="mt-4 p-3 bg-blue-900/30 rounded-md border border-blue-700/30">
              <p className="text-sm text-blue-300">
                🎯 You are now speaking with a simulated customer. Handle the conversation as you would in a real support scenario.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
          <DebugMessages debugMessages={callDebugMessages} />
        </div>
      </div>
    </main>
);
}