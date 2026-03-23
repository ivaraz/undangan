import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { content } from "../data/content";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";

const EventDetails = () => {
  const { event } = content;

  return (
    <Section id="event" className="bg-sage-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <SectionTitle title={event.title} subtitle={event.subtitle} />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {/* Ceremony Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="p-10 relative">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mb-8 text-sage-700 shadow-inner group-hover:rotate-12 transition-transform duration-300">
                <Calendar size={40} strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-serif text-sage-900 mb-3 tracking-wide">
                {event.ceremony.title}
              </h3>
              <div className="w-16 h-1 bg-gold-400 mb-8 rounded-full"></div>

              <div className="w-full space-y-6">
                <div className="flex items-center gap-4 bg-sage-50 p-4 rounded-xl border border-sage-100">
                  <div className="bg-white p-2 rounded-lg text-gold-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-sage-500 uppercase tracking-wider font-semibold">
                      Waktu
                    </p>
                    <p className="font-serif text-lg text-sage-800">
                      {event.ceremony.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-sage-50 p-4 rounded-xl border border-sage-100">
                  <div className="bg-white p-2 rounded-lg text-gold-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-sage-500 uppercase tracking-wider font-semibold">
                      Tanggal
                    </p>
                    <p className="font-serif text-lg text-sage-800">
                      {event.ceremony.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-sage-50 p-4 rounded-xl border border-sage-100">
                  <div className="bg-white p-2 rounded-lg text-gold-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-sage-500 uppercase tracking-wider font-semibold">
                      Tempat
                    </p>
                    <p className="font-serif text-lg text-sage-800 leading-tight">
                      {event.ceremony.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reception Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-gold-400"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-gold-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="p-10 relative">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mb-8 text-gold-700 shadow-inner group-hover:-rotate-12 transition-transform duration-300">
                <MapPin size={40} strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-serif text-sage-900 mb-3 tracking-wide">
                {event.reception.title}
              </h3>
              <div className="w-16 h-1 bg-sage-400 mb-8 rounded-full"></div>

              <div className="w-full space-y-6">
                <div className="flex items-center gap-4 bg-gold-50 p-4 rounded-xl border border-gold-100">
                  <div className="bg-white p-2 rounded-lg text-gold-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gold-600 uppercase tracking-wider font-semibold">
                      Waktu
                    </p>
                    <p className="font-serif text-lg text-sage-800">
                      {event.reception.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gold-50 p-4 rounded-xl border border-gold-100">
                  <div className="bg-white p-2 rounded-lg text-gold-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gold-600 uppercase tracking-wider font-semibold">
                      Tanggal
                    </p>
                    <p className="font-serif text-lg text-sage-800">
                      {event.reception.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gold-50 p-4 rounded-xl border border-gold-100">
                  <div className="bg-white p-2 rounded-lg text-gold-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gold-600 uppercase tracking-wider font-semibold">
                      Tempat
                    </p>
                    <p className="font-serif text-lg text-sage-800 leading-tight">
                      {event.reception.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default EventDetails;
