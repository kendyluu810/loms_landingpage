"use client";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import { motion } from "framer-motion";
import Image from "next/image";

const OverviewPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Overview Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col mt-32 justify-center items-center"
      >
        <div className="flex mt-3 flex-col justify-center items-center">
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
        <div className="space-y-8">
          <p className="max-w-7xl text-lg mt-10 text-gray-400">
            King Freight Logistics Vietnam is part of the King Freight
            International Corp group. In Vietnam, we have offices in Ho Chi Minh
            City, Hanoi, and Hai Phong. King Freight International Corp (KFIC)
            was officially established on December 13, 1994, and has been
            conducting regular business operations and NVOCC/ocean freight
            forwarding since March 1, 1995. A year later, King Freight Express
            Corp (KFEC) was inaugurated to expand our service scope to air
            freight transportation.
          </p>
          <div className="flex flex-col">
            <motion.div
              className="ml-10 rounded-lg shadow-lg overflow-hidden w-[1200px] h-[493px] relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="https://kflv.vn/wp-content/uploads/2024/05/hab.jpg"
                alt="Team"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-row -mt-20 relative">
              <Image
                src="/kflv.jpg"
                alt="KF Logo"
                width={315}
                height={147}
                className="object-contain"
              />
              <p className="ml-16 text-sm text-black max-w-3xl mt-24">
                Over the past 28 years of continuous growth, King Freight Group
                has established a global network with over 30 offices in Taiwan,
                Hong Kong, China, Indonesia, Vietnam, Cambodia, and the United
                States.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/*  */}
      <div className="max-w-7xl flex flex-row justify-center mt-20 space-x-8 h-[650px]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative rounded-lg shadow-lg overflow-hidden w-[584px] h-[584px]"
        >
          <Image
            src="/cargo_ship_container.jpg"
            alt="Cargo Ship Container"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="w-2xl text-lg font-medium"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            King Freight officially established its presence in Vietnam in 2006
            under the name King Freight Vietnam (KFVN), contributing to the
            country’s logistics industry development. In 2019, the company
            underwent restructuring to elevate and expand into King Freight
            Logistics Vietnam (KFLV), specializing in comprehensive logistics
            services and solutions for air, sea, road transport, and
            warehousing.
          </p>
          <p>
            With a reliable and experienced team, KFLV ensures safe and timely
            delivery of customers’ goods. Here are the six main services
            currently provided by KFLV:
          </p>
          <ul className="list-disc ml-6 mt-4 text-black text-base">
            <li>Ocean Freight: Efficient maritime solutions.</li>
            <li>Air Freight: Fast and reliable air cargo delivery.</li>
            <li>Cross Border Service: Convenient cross-border services.</li>
            <li>Master Consolidation: Optimized consolidation services.</li>
            <li>Customs Clearance: Swift and accurate customs declaration.</li>
            <li>
              Domestic Transportation: Reliable domestic transport solutions.
            </li>
          </ul>
          <p>
            King Freight Logistics Vietnam strives to deliver the most efficient
            transportation solutions to its customers.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OverviewPage;
