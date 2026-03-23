import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause } from "lucide-react";
import useAudioPlayer from "../../hooks/useAudioPlayer";

const AudioPlayer = () => {
  const { audio, isPlaying, showPrompt, audioRef, handlePlay, togglePlay } =
    useAudioPlayer();

  return (
    <>
      <audio
        ref={audioRef}
        src={audio.url}
        loop
        preload="auto"
        crossOrigin="anonymous"
      />

      {/* Modal Pembuka */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative bg-gradient-to-b from-sage-50 to-white p-10 rounded-3xl text-center shadow-2xl max-w-sm mx-4 border border-gold-200 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {/* Dekorasi lingkaran emas */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gold-300/20 rounded-full blur-xl" />

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="flex justify-center mb-5"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                    <Music className="w-7 h-7 text-gold-600" />
                  </div>
                </motion.div>
                <h3 className="font-serif text-2xl text-sage-800 mb-2">
                  {audio.prompt.title}
                </h3>
                <p className="text-sage-600 mb-8 font-sans text-sm leading-relaxed">
                  {audio.prompt.message}
                </p>
                <button
                  onClick={handlePlay}
                  className="px-10 py-3.5 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-full font-medium hover:from-sage-800 hover:to-sage-900 transition-all flex items-center justify-center gap-2.5 mx-auto shadow-lg hover:shadow-xl active:scale-95"
                >
                  <Music size={18} />
                  <span>{audio.prompt.buttonText}</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Putar/Jeda Mengambang */}
      {!showPrompt && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gold-600 transition-all duration-300 animate-spin-slow"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          >
            {isPlaying ? <Pause size={20} /> : <Music size={20} />}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default AudioPlayer;
