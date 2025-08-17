"use client";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, Headset } from "lucide-react";
import Image from "next/image";

export default function OurServices() {
  const services = [
    {
      icon: <Plane className="w-6 h-6 text-white" />,
      title: "Air Freight",
      description: "Providing air freight transportation services",
      link: "#",
    },
    {
      icon: <Ship className="w-6 h-6 text-white" />,
      title: "Ocean Freight",
      description: "Providing Sea Freight Transportation Services",
      link: "#",
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Land Transportation",
      description: "Providing Road Transportation Services",
      link: "#",
    },
    {
      icon: <Headset className="w-6 h-6 text-white" />,
      title: "Support Services",
      description: "Providing Support Services",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#0f1c2e] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300 mb-12">
            King Freight Logistics Vietnam offers customers 4 transportation
            services and related support services throughout the transportation
            process.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: idx * 0.2, // delay theo index
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#162638] rounded-lg p-6 relative border border-gray-700 hover:shadow-lg hover:scale-105 transition-transform"
              >
                {/* Icon */}
                <div className="absolute -top-6 left-6 bg-green-500 rounded-full p-3 shadow-lg">
                  {service.icon}
                </div>

                {/* Nội dung */}
                <h3 className="text-xl font-semibold mt-10">{service.title}</h3>
                <p className="text-gray-300 mt-2 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  View details <span className="text-sm">▶</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="ml-10 rounded-lg shadow-lg overflow-hidden w-[600px] h-[702px] relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="https://images.pexels.com/photos/3840447/pexels-photo-3840447.jpeg"
            alt="Cargo Ship"
            fill
            className="object-fit rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
