"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

const cards = [
  {
    icon: "/ser-icon1.svg",
    text: "Assisting in selecting the most suitable airline and flight for your shipment.",
  },
  {
    icon: "/ser-icon2.svg",
    text: "Optimizing cost and flexibility to ensure timely delivery of your goods.",
  },
  {
    icon: "/ser-icon3.svg",
    text: "Providing information and assistance with permits, customs procedures, and security regulations to avoid additional costs.",
  },
];

export default function AirFreightPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Air Freight Page Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-16 px-4 max-w-6xl w-full">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500">
            Air Freight
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-700">
            King Freight Logistics Vietnam provides top-tier air freight
            services with a global network including major stops of airlines
            such as Vietnam Airlines, VietJet Airlines, Southern China Airlines,
            EVA Air, etc. We handle services such as airport to airport, door to
            airport, airport to door, and door to door. Additionally, the types
            of goods transported include food, garments, frozen seafood, and
            dangerous goods.
          </p>
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-xl shadow-lg relative"
        >
          <Image
            src="/ser21.jpg"
            alt="Air Freight"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      {/* benefit section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 mt-12 mb-8"
      >
        {cards.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, backgroundColor: "#A3E635" }} // bg-lime-400
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-green-600 text-white rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md cursor-pointer"
          >
            <Image
              src={item.icon}
              alt={item.text}
              width={48}
              height={48}
              className="mb-4"
            />
            <p className="font-medium text-sm sm:text-base">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
