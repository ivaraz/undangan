import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className,
  icon: Icon,
  ...props
}) => {
  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-sage-800 text-white hover:bg-sage-900 focus:ring-sage-600",
    secondary: "bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-400",
    outline:
      "bg-transparent border-2 border-sage-800 text-sage-800 hover:bg-sage-800 hover:text-white focus:ring-sage-600",
    goldOutline:
      "bg-transparent border border-gold-400 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-white focus:ring-gold-400",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {Icon && <Icon size={18} />}
      <span>{children}</span>
    </motion.button>
  );
};

export default Button;
