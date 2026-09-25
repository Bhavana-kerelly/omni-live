import React from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

export default function VideoControls({ isPlaying, isMuted, onTogglePlay, onToggleSound }) {
  return (
    <div className="hero-video-controls-pill">
      {/* Play/Pause Button */}
      <button 
        type="button" 
        className="video-ctrl-btn"
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
      >
        {isPlaying ? (
          <>
            <Pause size={14} aria-hidden="true" />
            <span>PAUSE</span>
          </>
        ) : (
          <>
            <Play size={14} aria-hidden="true" />
            <span>PLAY</span>
          </>
        )}
      </button>

      <div className="video-ctrl-divider" aria-hidden="true" />

      {/* Sound Toggle Button */}
      <button 
        type="button" 
        className="video-ctrl-btn"
        onClick={onToggleSound}
        aria-label={isMuted ? 'Turn sound on' : 'Turn sound off'}
      >
        {isMuted ? (
          <>
            <VolumeX size={14} aria-hidden="true" />
            <span>SOUND OFF</span>
          </>
        ) : (
          <>
            <Volume2 size={14} aria-hidden="true" />
            <span>SOUND ON</span>
          </>
        )}
      </button>
    </div>
  );
}
