import React from "react";
import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";
import { content } from "../data/content";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";

const Gallery = () => {
  const { gallery } = content;

  // Split images for masonry effect columns
  const column1 = gallery.images.filter((_, i) => i % 3 === 0);
  const column2 = gallery.images.filter((_, i) => i % 3 === 1);
  const column3 = gallery.images.filter((_, i) => i % 3 === 2);

  return (
    <Section id="gallery" className="bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-sage-50 to-transparent" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-gold-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-sage-100 rounded-full blur-3xl opacity-50" />

      <SectionTitle
        title={gallery.title}
        subtitle={gallery.subtitle}
        icon={Camera}
      />

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {column1.map((src, idx) => (
            <GalleryItem key={`col1-${idx}`} src={src} index={idx} />
          ))}
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-6 md:mt-12">
          {column2.map((src, idx) => (
            <GalleryItem key={`col2-${idx}`} src={src} index={idx + 2} />
          ))}
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {column3.map((src, idx) => (
            <GalleryItem key={`col3-${idx}`} src={src} index={idx + 4} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const GalleryItem = ({ src, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src={src}
        alt="Gallery Memory"
        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 0 }} // Reset for hover effect
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gold-500 shadow-xl"
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
