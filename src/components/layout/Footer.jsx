import React from "react";
import { Heart } from "lucide-react";
import { content } from "../../data/content";

const Footer = () => {
  const { footer } = content;

  return (
    <footer className="bg-sage-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-gold-400 fill-current" />
          <span className="text-2xl font-serif">{footer.branding}</span>
        </div>
        <p className="font-sans text-sage-200 mb-6">{footer.message}</p>
        <div className="text-sm text-sage-400">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
