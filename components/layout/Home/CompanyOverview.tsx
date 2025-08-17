"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CompanyOverview() {
  return (
    <div className="flex flex-col mt-32 justify-center items-center ">
      <div className="flex mt-3 flex-col">
        <h2 className="text-5xl font-bold">
          <span className="text-green-600">K</span>ing{" "}
          <span className="text-green-600">F</span>eight{" "}
          <span className="text-green-600">L</span>ogistics{" "}
          <span className="text-green-600">V</span>ietnam
        </h2>
        <p className="font-semibold text-2xl mt-4 text-center text-gray-400">
          Keen - Faithful - Leading - Vigorous
        </p>
      </div>
      <div className="flex flex-row mt-3 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg w-[480px]">
            King Freight Logistics Vietnam is part of the King Freight
            International Corp group. In Vietnam, we have offices in Ho Chi Minh
            City, Hanoi, and Hai Phong. King Freight International Corp (KFIC)
            was officially established on December 13, 1994, and has been
            conducting regular business operations and NVOCC/ocean freight
            forwarding since March 1, 1995. A year later, King Freight Express
            Corp (KFEC) was inaugurated to expand our service scope to air
            freight transportation.
          </p>
          <Button className="mt-6 bg-[#36a158] hover:bg-[#a2d236] text-lg font-semibold gap-4 text-white hover:text-black border rounded-[6px]">
            View details <ChevronRight width={16} height={16} />
          </Button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="ml-10 rounded-lg shadow-lg overflow-hidden w-[680px] h-[377px] relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="https://kflv.vn/wp-content/uploads/2024/05/hab.jpg"
            alt="King Freight Logistics Vietnam"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
