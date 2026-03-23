import { useState, useRef } from "react";
import { content } from "../data/content";

const useAudioPlayer = () => {
  const { audio } = content;
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef(null);

  const fadeInVolume = (audioEl, targetVolume = 0.5, duration = 2000) => {
    audioEl.volume = 0;
    const steps = 20;
    const stepTime = duration / steps;
    const volumeStep = targetVolume / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      audioEl.volume = Math.min(volumeStep * currentStep, targetVolume);
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          fadeInVolume(audioRef.current);
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Playback failed", error);
          setIsPlaying(false);
        })
        .finally(() => {
          setShowPrompt(false);
        });
    } else {
      setShowPrompt(false);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return {
    audio,
    isPlaying,
    showPrompt,
    audioRef,
    handlePlay,
    togglePlay,
  };
};

export default useAudioPlayer;
