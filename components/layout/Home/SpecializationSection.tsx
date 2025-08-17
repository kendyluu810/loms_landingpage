"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function SpecializationSection() {
  const cards = [
    {
      img: "https://images.pexels.com/photos/2070676/pexels-photo-2070676.jpeg",
      title: "Yarn,Fiber",
      desc: "Transportation services for fiber and yarn used in manufacturing.",
      link: "#",
    },
    {
      img: "https://images.pexels.com/photos/21694/pexels-photo.jpg",
      title: "Tires",
      desc: "Transportation services for tires and rubber products.",
      link: "#",
    },
    {
      img: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      title: "Furniture",
      desc: "Transportation services for furniture and home goods.",
      link: "#",
    },
    {
      img: "https://images.pexels.com/photos/229789/pexels-photo-229789.jpeg",
      title: "Seafoods",
      desc: "Transportation services for seafood and perishable goods.",
      link: "#",
    },
    {
      img: "https://images.pexels.com/photos/7232914/pexels-photo-7232914.jpeg",
      title: "PET Plastic",
      desc: "Transportation services for PET plastic materials.",
      link: "#",
    },
    {
      img: "https://images.pexels.com/photos/4452395/pexels-photo-4452395.jpeg",
      title: "Cowhide",
      desc: "Transportation services for cowhide and leather products.",
      link: "#",
    },
    {
      img: "https://images.pexels.com/photos/6331032/pexels-photo-6331032.jpeg",
      title: "Garment",
      desc: "Transportation services for garments and textiles.",
      link: "#",
    },
    {
      img: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg",
      title: "Agricultural Produce",
      desc: "Transportation services for agricultural produce and goods.",
      link: "#",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-28 flex flex-col items-center justify-center max-w-7xl"
    >
      <h2 className="font-bold text-4xl">
        Specializing in Import and Export of Goods
      </h2>
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Ảnh */}
            <Image
              src={card.img}
              alt={card.title}
              width={400}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-green-600 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm mb-4">{card.desc}</p>
              <a href={card.link} className="px-4 py-2 rounded-lg transition">
                View Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
