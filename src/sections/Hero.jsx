import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { content } from "../data/content";
import Button from "../components/ui/Button";

const FloatingParticle = ({ delay, duration, x, y, size }) => (
  <motion.div
    className="absolute rounded-full bg-gold-400/30"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const particles = [
  { delay: 0, duration: 4, x: 10, y: 20, size: 6 },
  { delay: 1, duration: 5, x: 25, y: 60, size: 4 },
  { delay: 0.5, duration: 6, x: 40, y: 30, size: 8 },
  { delay: 2, duration: 4.5, x: 55, y: 70, size: 5 },
  { delay: 1.5, duration: 5.5, x: 70, y: 25, size: 7 },
  { delay: 0.8, duration: 4, x: 85, y: 55, size: 4 },
  { delay: 2.5, duration: 6, x: 15, y: 80, size: 6 },
  { delay: 1.2, duration: 5, x: 90, y: 40, size: 5 },
  { delay: 3, duration: 4.5, x: 50, y: 15, size: 3 },
  { delay: 0.3, duration: 5, x: 75, y: 85, size: 6 },
  { delay: 1.8, duration: 6, x: 35, y: 50, size: 4 },
  { delay: 2.2, duration: 4, x: 60, y: 90, size: 5 },
];

const Hero = () => {
  const { hero } = content;

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Wedding Background"
          className="w-full h-full object-cover scale-105 hero-bg-zoom"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-sage-900/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-800/30 via-transparent to-sage-800/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Top-left corner */}
        <svg
          className="absolute top-6 left-6 w-24 h-24 md:w-32 md:h-32 text-gold-400/40"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M0 35 Q0 10 25 0"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="50" cy="0" r="2" fill="currentColor" opacity="0.6" />
        </svg>
        {/* Top-right corner */}
        <svg
          className="absolute top-6 right-6 w-24 h-24 md:w-32 md:h-32 text-gold-400/40 rotate-90"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M0 35 Q0 10 25 0"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="50" cy="0" r="2" fill="currentColor" opacity="0.6" />
        </svg>
        {/* Bottom-left corner */}
        <svg
          className="absolute bottom-6 left-6 w-24 h-24 md:w-32 md:h-32 text-gold-400/40 -rotate-90"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M0 35 Q0 10 25 0"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="50" cy="0" r="2" fill="currentColor" opacity="0.6" />
        </svg>
        {/* Bottom-right corner */}
        <svg
          className="absolute bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 text-gold-400/40 rotate-180"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 50 Q0 0 50 0" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M0 35 Q0 10 25 0"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="50" cy="0" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      {/* Horizontal Gold Lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] z-[2] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] z-[2] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-12 h-12 text-gold-400 fill-current drop-shadow-[0_0_12px_rgba(255,204,71,0.5)]" />
          </motion.div>
          <p className="font-sans text-lg md:text-xl uppercase tracking-[0.3em] mb-4 text-gold-200 drop-shadow-lg">
            {hero.subtitle}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {hero.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <p className="font-serif text-2xl md:text-3xl italic text-gold-100 drop-shadow-md">
              {hero.date}
            </p>
            <motion.div
              className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </div>

          <Button
            className="bg-white/10 backdrop-blur-sm border border-gold-400 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-white rounded-full mx-auto shadow-[0_0_20px_rgba(255,204,71,0.15)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("event")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {hero.ctaText}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-300 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
