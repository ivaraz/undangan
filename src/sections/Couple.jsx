import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";

const Couple = () => {
  const { couple } = content;

  return (
    <Section id="couple">
      <SectionTitle title={couple.title} subtitle={couple.subtitle} />

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold-200 shadow-xl mb-6 mx-auto transform hover:scale-105 transition-transform duration-500">
            <img
              src={couple.groom.image}
              alt="Groom"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-3xl font-serif text-sage-900 mb-2">
            {couple.groom.name}
          </h3>
          <p className="text-gold-600 font-sans font-medium mb-4">
            {couple.groom.role}
          </p>
          <p className="text-gray-600 max-w-xs mx-auto text-sm leading-relaxed">
            {couple.groom.bio} <br />
            {couple.groom.quote}
          </p>
        </motion.div>

        {/* Divider / Ampersand */}
        <div className="font-serif text-6xl text-gold-300">&</div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold-200 shadow-xl mb-6 mx-auto transform hover:scale-105 transition-transform duration-500">
            <img
              src={couple.bride.image}
              alt="Bride"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-3xl font-serif text-sage-900 mb-2">
            {couple.bride.name}
          </h3>
          <p className="text-gold-600 font-sans font-medium mb-4">
            {couple.bride.role}
          </p>
          <p className="text-gray-600 max-w-xs mx-auto text-sm leading-relaxed">
            {couple.bride.bio} <br />
            {couple.bride.quote}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Couple;
