"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

const cards = [
  {
    image: "/Customs_declaration.png",
    title: "Customs declaration / clearance",
  },
  {
    image: "/EPE.jpg",
    title: "Annual report filing support services for EPE",
  },
  {
    image: "/ser-img1.jpg",
    title: "Apply for import-export license",
  },
  {
    image: "/Certificate.png",
    title: "Certificate of Origin",
  },
  {
    image: "/food.png",
    title: "Certificate of Food Safety and Hygiene Registration",
  },
  {
    image: "/Phytosanitary.png",
    title: "Application for Phytosanitary Certificate",
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* support services */}
      <div className="flex flex-row justify-center space-x-8  mt-28">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col w-[580px] mt-2 space-y-6"
        >
          <h2 className="text-5xl font-bold text-green-500">
            Support Services
          </h2>
          <p className="text-lg font-medium">
            With our experienced team and deep expertise in product regulations,
            we provide free documentation and advisory on import-export, tax
            issues, and customs clearance regulations.
            <br /> Additionally, King Freight Logistics Vietnam supports
            customers in customs declaration, delivery order issuance,
            declaration registration, cargo inspection, tax calculation, customs
            clearance, etc. We ensure the lowest tax rates while protecting the
            interests of our customers when utilizing KFLV’s services.
          </p>
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          className="mt-2 w-[580px] h-[350px] overflow-hidden rounded-lg shadow-lg relative"
        >
          <Image
            src="/suport-services.png"
            alt="Air Freight"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
        className="w-full max-w-7xl px-6 mt-20"
      >
        <div className="flex border-t border-l border-r rounded-t-lg overflow-hidden gap-4 mb-5">
          <div className="bg-green-600 text-white flex flex-col justify-center items-center text-center w-[580px] h-[330px] p-8">
            <h3 className="text-2xl font-semibold mb-4">
              6 customs declaration services
            </h3>
            <p className="text-base font-medium">
              KFLV provides customers with 6 customs declaration services
              related to the cargo transportation process.
            </p>
          </div>

          {cards.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="relative w-[276px] h-[330px] overflow-hidden group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-center transition-all duration-300 group-hover:bg-green-600/70">
                <p className="font-semibold text-lg text-white text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex border border-t-0 rounded-b-lg overflow-hidden mb-6 gap-5">
          {cards.slice(2).map((item, idx) => (
            <div
              key={idx}
              className="relative w-[276px] h-[330px] overflow-hidden rounded-lg group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-center transition-all duration-300 group-hover:bg-green-400/70">
                <p className="font-semibold text-lg text-white text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
