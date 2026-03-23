import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, User } from "lucide-react";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import useWishes from "../hooks/useWishes";

const Wishes = () => {
  const {
    wishesContent,
    wishes,
    newMessage,
    setNewMessage,
    newName,
    setNewName,
    handleSubmit,
  } = useWishes();

  return (
    <Section id="wishes" className="bg-sage-50">
      <SectionTitle
        title={wishesContent.title}
        subtitle={wishesContent.subtitle}
      />

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Formulir */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md border border-sage-100 sticky top-24"
          >
            <h3 className="text-xl font-serif text-sage-800 mb-4 flex items-center gap-2">
              <MessageCircle size={20} className="text-gold-500" />
              <span>{wishesContent.formTitle}</span>
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={wishesContent.placeholders.name}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-sage-200 focus:ring-2 focus:ring-gold-400 outline-none"
              />
              <textarea
                placeholder={wishesContent.placeholders.message}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-sage-200 focus:ring-2 focus:ring-gold-400 outline-none resize-none"
              ></textarea>
              <Button type="submit" variant="primary" className="w-full">
                {wishesContent.buttonText}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Daftar Ucapan */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
        >
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-white p-4 rounded-xl shadow-sm border border-sage-50"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 flex-shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-sage-800 font-bold">
                    {wish.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{wish.message}</p>
                  <p className="text-xs text-sage-400 mt-2">{wish.date}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Wishes;
