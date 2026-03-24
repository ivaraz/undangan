import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { content } from "../data/content";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import useRsvpForm from "../hooks/useRsvpForm";

const RSVP = () => {
  const { rsvp } = content;
  const { formData, isSubmitted, handleChange, handleSubmit } = useRsvpForm();

  return (
    <Section id="rsvp">
      <SectionTitle title={rsvp.title} subtitle={rsvp.subtitle} />

      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-sage-50 p-8 md:p-12 rounded-2xl shadow-lg border border-sage-100"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif text-sage-700 mb-2">
                {rsvp.thankYouTitle}
              </h3>
              <p className="text-gray-600">{rsvp.thankYouMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    Jumlah Tamu
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-white"
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    Konfirmasi
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="attending">Hadir</option>
                    <option value="not_attending">Berhalangan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-white resize-none"
                  placeholder="Tulis pesan untuk mempelai..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                icon={Send}
                className="w-full"
              >
                {rsvp.buttonText}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default RSVP;
