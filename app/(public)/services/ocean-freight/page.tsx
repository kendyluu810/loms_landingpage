"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoCarousel from "@/components/layout/Home/LogoCarousel";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

const benefits = [
  {
    icon: "/ben1.png",
    text: "FCL / LCL / Specialized containers",
  },
  {
    icon: "/ben2.png",
    text: "Fixed weekly sailing schedule",
  },
  {
    icon: "/ben3.png",
    text: "Time savings",
  },
  {
    icon: "/ben4.png",
    text: "Master consolidator",
  },
  {
    icon: "/ben5.png",
    text: "Global network",
  },
  {
    icon: "/ben6.png",
    text: "Competitive pricing",
  },
];

export default function OceanFreightPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/*  Ocean Freight Page Main Content*/}
      <div className="flex flex-row justify-center space-x-8  mt-28">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col w-[580px] mt-2 space-y-6"
        >
          <h2 className="text-5xl font-bold text-green-500">
            Ocean Freight Services
          </h2>
          <p className="text-lg font-medium">
            KFLV handles the import and export of goods, from standard
            containers to refrigerated and specialized containers, through major
            ports in Vietnam: Hai Phong, Cat Lai, SP-ITC, Cai Mep, and VICT. We
            provide both international and domestic shipping routes:
            International: European, American, Australian markets, and Asian
            markets, including China, Taiwan, South Korea, Japan, ASEAN
            countries, the Indian Subcontinent, and the Middle East. Domestic:
            major cities such as Ho Chi Minh City, Hai Phong, Hanoi, and Da
            Nang.
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
            src="/ocean_freight.png"
            alt="Ocean Freight"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="mt-16">
        <LogoCarousel />
      </div>
      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
        className="w-full max-w-7xl px-6 mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-r rounded-t-lg overflow-hidden">
          <div className="bg-green-600 text-white p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Benefits of using KFLV services
            </h3>
            <p className="text-base font-medium">
              Lower transportation costs compared to other methods, while being
              able to accommodate large volumes of goods, helping to save costs
              and efficiently transport large quantities.
            </p>
          </div>

          {benefits.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 border-l border-b"
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={64}
                height={64}
                className="mb-4"
              />
              <p className="font-semibold text-xl text-center">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Hàng dưới: 4 benefit */}
        <div className="grid grid-cols-1 md:grid-cols-4 border rounded-b-lg overflow-hidden mb-6">
          {benefits.slice(2).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 border-l"
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={64}
                height={64}
                className="mb-4"
              />
              <p className="font-semibold text-xl text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
