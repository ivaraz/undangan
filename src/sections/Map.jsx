import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { content } from "../data/content";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

const Map = () => {
  const { map } = content;

  return (
    <Section id="map" className="bg-sage-50 text-center">
      <SectionTitle title={map.title} subtitle={map.subtitle} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <a
          href={map.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="primary" icon={MapPin}>
            {map.buttonText}
          </Button>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl border-4 border-white"
      >
        <iframe
          src={map.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Pernikahan"
        ></iframe>
      </motion.div>
    </Section>
  );
};

export default Map;
