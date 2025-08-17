"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/oocl-seeklogo.png", alt: "OOCL" },
  { src: "/one-logo.png", alt: "ONE" },
  { src: "/evergreen-logo.png", alt: "Evergreen" },
];

export default function LogoCarousel() {
  return (
    <div className="mt-20 overflow-hidden bg-white py-8">
      <motion.div
        className="flex gap-32"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 35,
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={80}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
