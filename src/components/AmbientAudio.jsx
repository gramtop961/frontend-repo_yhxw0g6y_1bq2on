import React, { useEffect, useRef, useState } from "react";

// Simple ambient audio controller with gentle defaults
// Attempts to autoplay softly; browsers may block until user interaction.
// Provides play/pause, mute, and volume controls.

const DEFAULT_TRACK = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_9d8b73f8e5.mp3?filename=romantic-inspiration-110997.mp3";

function AmbientAudio({ src = DEFAULT_TRACK }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    a.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    // Try a soft autoplay muted, then keep muted state
    a.muted = true;
    a.volume = 0.25;
    a.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Autoplay likely blocked; wait for user interaction
      setIsPlaying(false);
    });
  }, []);

  const togglePlay = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      try {
        if (a.muted && !muted) a.muted = muted;
        await a.play();
        setIsPlaying(true);
      } catch (e) {
        // ignored
      }
    }
  };

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !muted;
    setMuted(a.muted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-3 rounded-full bg-white/80 backdrop-blur px-3 py-2 shadow ring-1 ring-rose-200/60">
        <button
          onClick={togglePlay}
          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-300 to-rose-300 text-rose-900 text-sm font-medium shadow hover:shadow-md transition"
        >
          {isPlaying ? "Pausar" : "Tocar"}
        </button>
        <button
          onClick={toggleMute}
          className="text-rose-800/80 text-sm hover:text-rose-900"
        >
          {muted ? "Sem som" : "Com som"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 accent-rose-400"
          aria-label="Volume"
        />
      </div>
      <audio ref={audioRef} loop src={src} preload="auto" />
    </div>
  );
}

export default AmbientAudio;
