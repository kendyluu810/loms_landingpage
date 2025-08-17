"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function VSCPage() {
  const cards = [
    {
      title: "KEEN",
      subtitle: "Nhiệt huyết",
      desc: "With our customers, we are always KEEN to engage with responsibility, quality service, and efficiency.",
    },
    {
      title: "FAITHFUL",
      subtitle: "Trung thành",
      desc: "FAITHFULNESS is a top priority for KFLV when working with suppliers, partners, and customers.",
    },
    {
      title: "LEADING",
      subtitle: "Dẫn đầu",
      desc: "We have continuously strived to pursue the goal of becoming a LEADING enterprise in the logistics industry.",
    },
    {
      title: "VIGOROUS",
      subtitle: "Mạnh mẽ",
      desc: "KFLV always puts in VIGOROUS efforts to implement efficient logistics solutions that exceed your expectations.",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col mt-28 justify-center items-center"
      >
        <h2 className="text-5xl font-bold mt-2">
          <span className="text-green-600">K</span>ing{" "}
          <span className="text-green-600">F</span>eight{" "}
          <span className="text-green-600">L</span>ogistics{" "}
          <span className="text-green-600">V</span>ietnam
        </h2>
        <p className="font-semibold text-2xl mt-4 text-center text-gray-400">
          Keen - Faithful - Leading - Vigorous
        </p>
        <div className="mt-16 flex flex-col justify-center items-center">
          <h2 className="font-bold text-5xl text-green-600">
            Global Vision, Reaching New Heights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg shadow-lg relative overflow-hidden w-[370px] h-[370px]"
            >
              <Image src="/ab-vi1.jpg" alt="" fill className="object-cover" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg shadow-lg relative overflow-hidden w-[370px] h-[370px]"
            >
              <Image src="/ab-vi2.jpg" alt="" fill className="object-cover" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg shadow-lg relative overflow-hidden w-[370px] h-[370px]"
            >
              <Image src="/ab-vi3.jpg" alt="" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Spirit Section */}
      <div className="max-w-7xl mx-auto flex flex-row mt-20 space-x-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[480px] text-right space-y-4 "
        >
          <h2 className="font-bold text-5xl text-green-500">Spirit</h2>
          <p className="text-lg font-medium">
            King Freight International Corp (KFIC) has built a reputation in the
            logistics industry since its establishment in 1994 and has been
            officially operating regular business and NVOCC/ocean freight
            forwarding services since March 1, 1995. A year later, King Freight
            Express Corp (KFEC) was inaugurated to expand our service range to
            air freight transportation.
          </p>
        </motion.div>
        <motion.div
          className="rounded-lg shadow-lg overflow-hidden relative w-[660px] h-[380px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="/Tam-nhin.png"
            alt="Tam Nhin"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      {/* Core values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
        viewport={{ once: true }}
        className="flex flex-col mt-20 justify-center items-center "
      >
        <h2 className="text-5xl font-bold text-green-500">Core Values</h2>
        <p className="text-lg font-medium">
          At King Freight Logistics Vietnam, we always strive towards our core
          values "KFLV"
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="bg-green-600 text-white p-6 rounded-lg text-center flex items-center justify-center w-[270px] h-[150px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <AnimatePresence mode="wait">
                {hoverIndex === index ? (
                  <motion.p
                    key="desc"
                    className="text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.desc}
                  </motion.p>
                ) : (
                  <motion.div
                    key="title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-sm">{card.subtitle}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-lg shadow-lg overflow-hidden relative w-[1200px] h-[330px] mt-5"
        >
          <Image
            src="/group-handshake.jpg"
            alt="Group Handshake"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="flex flex-row mt-5 space-x-4 justify-center items-center">
          <p className="text-lg font-medium w-[600px]">
            With our customers, we are always <strong>KEEN</strong> to engage
            with responsibility, quality service, and efficiency. Especially,
            <strong> FAITHFULNESS</strong> is a top priority for KFLV when
            working with suppliers, partners, and customers.
          </p>
          <p className="text-lg font-medium w-[600px]">
            Throughout our formation and development, we have continuously
            strived to pursue the goal of becoming a <strong>LEADING</strong>{" "}
            enterprise and building our reputation in the logistics industry in
            Vietnam and around the world. KFLV always puts in{" "}
            <strong>VIGOROUS</strong> efforts to develop and implement efficient
            logistics solutions that exceed your expectations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
