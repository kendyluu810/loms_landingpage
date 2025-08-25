"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CompanyOverview() {
  return (
    <section className="mt-32 px-4 flex flex-col items-center max-w-6xl mx-auto">
      <div className="mt-3 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-green-600">K</span>ing{" "}
          <span className="text-green-600">F</span>eight{" "}
          <span className="text-green-600">L</span>ogistics{" "}
          <span className="text-green-600">V</span>ietnam
        </h2>
        <p className="font-semibold text-lg sm:text-xl md:text-2xl mt-4 text-gray-400">
          Keen - Faithful - Leading - Vigorous
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 items-center md:items-start gap-10 md:gap-16 w-full">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <p className="text-base sm:text-lg leading-relaxed text-left sm:text-justify">
            King Freight Logistics Vietnam is part of the King Freight
            International Corp group. In Vietnam, we have offices in Ho Chi Minh
            City, Hanoi, and Hai Phong. King Freight International Corp (KFIC)
            was officially established on December 13, 1994, and has been
            conducting regular business operations and NVOCC/ocean freight
            forwarding since March 1, 1995. A year later, King Freight Express
            Corp (KFEC) was inaugurated to expand our service scope to air
            freight transportation.
          </p>
          <Link href="/about-us/overview">
            <Button className="mt-6 bg-[#36a158] hover:bg-[#a2d236] text-lg font-semibold gap-2 text-white hover:text-black rounded-md">
              View details <ChevronRight width={16} height={16} />
            </Button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 rounded-lg shadow-lg overflow-hidden relative aspect-video max-w-xl w-full"
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
    </section>
  );
}
