import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      {Icon && (
        <div className="flex justify-center mb-4">
          <Icon className="text-gold-500 w-8 h-8" />
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sage-600 font-sans italic text-lg">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-gold-400 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
};

export default SectionTitle;
