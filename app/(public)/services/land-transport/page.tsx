"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function LandTransportPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Land Transport  */}
      <div className="flex flex-row justify-center space-x-8  mt-28">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col w-[580px] mt-2 space-y-6"
        >
          <h2 className="text-5xl font-bold text-green-500">
            Cross-border transportation services
          </h2>
          <p className="text-lg font-medium">
            KFLV’s cross-border transportation services ensure effective
            connectivity between China and Vietnam, Vietnam and Cambodia, even
            covering the entire Indochinese Peninsula and Southeast Asian
            countries.
          </p>
          <p className="text-lg font-medium">Advantages:</p>
          <ul className="list-disc ml-6 mt-2 text-black text-base">
            <li>Simple pricing</li>
            <li>Flexible schedules</li>
            <li>No restrictions on Dangerous Goods (DG)</li>
            <li>
              No restrictions on Overweight and Out of Gauge (OOG) shipments
            </li>
          </ul>
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
            src="/container_port.jpg"
            alt="Air Freight"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      {/* Our routes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
        className="flex flex-col justify-center items-center mt-20 space-y-5"
      >
        <h2 className="text-3xl font-bold text-green-500">Our Routes</h2>
        <p className="text-lg font-bold text-gray-400">
          CHINA – VIETNAM – CAMBODIA – LAOS – THAILAND – MALAYSIA – SINGAPORE
        </p>
        {/* table */}
        <div className="w-full max-w-7xl px-4 mx-auto">
          <table className="w-full border border-gray-300 text-base">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-6 py-4 border">Route (From Pingxiang)</th>
                <th className="px-6 py-4 border">Distance (km)</th>
                <th className="px-6 py-4 border">Lead time (hrs)</th>
                <th className="px-6 py-4 border">Transit Time (days)</th>
                <th className="px-6 py-4 border">Number of border</th>
                <th className="px-6 py-4 border">Border name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 border">China – North Vietnam</td>
                <td className="px-6 py-4 border">130 – 350</td>
                <td className="px-6 py-4 border">3.5 – 7</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">Pingxiang (CN)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">China – North Vietnam</td>
                <td className="px-6 py-4 border">130 – 350</td>
                <td className="px-6 py-4 border">3.5 – 7</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">Pingxiang (CN)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">China – North Vietnam</td>
                <td className="px-6 py-4 border">130 – 350</td>
                <td className="px-6 py-4 border">3.5 – 7</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">Pingxiang (CN)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">China – North Vietnam</td>
                <td className="px-6 py-4 border">130 – 350</td>
                <td className="px-6 py-4 border">3.5 – 7</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">Pingxiang (CN)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border">China – North Vietnam</td>
                <td className="px-6 py-4 border">130 – 350</td>
                <td className="px-6 py-4 border">3.5 – 7</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">1</td>
                <td className="px-6 py-4 border">Pingxiang (CN)</td>
              </tr>
              {/* Các dòng khác */}
            </tbody>
          </table>
        </div>
      </motion.div>
      {/* Domestic transportation services */}
      <div className="flex flex-row justify-center space-x-8  mt-28">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          className="mt-2 w-[580px] h-[350px] overflow-hidden rounded-lg shadow-lg relative"
        >
          <Image
            src="/container_port.jpg"
            alt="Air Freight"
            fill
            className="object-cover"
          />
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col w-[580px] mt-2 space-y-6"
        >
          <h2 className="text-5xl font-bold text-green-500">
            Domestic transportation services
          </h2>
          <p className="text-lg font-medium">
            Transportation of goods domestically by road, waterway, air, and
            rail across Vietnam. Alongside a diverse fleet catering to shipments
            of all scales: standard trucks, heavy-duty trucks, oversized trucks,
            heavy haul trucks, containers, and trailers.
          </p>
          <p className="text-lg font-medium">
            Our domestic transportation services include:
          </p>
          <ul className="list-disc ml-6 mt-2 text-black text-base">
            <li>Port-to-Port: Hai Phong, Da Nang & Ho Chi Minh City, etc.</li>
            <li>
              City-to-City: Bac Giang to Bac Ninh, Thai Nguyen to Bac Giang,
              freight services in Ho Chi Minh City, etc.
            </li>
            <li>From North to South and vice versa.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
