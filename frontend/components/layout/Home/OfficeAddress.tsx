"use client";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const offices = [
  {
    name: "Ho Chi Minh City",
    address:
      "Units C3.08 – C3.09 – C3.10 – C3.11, 3rd Floor, Tower C, Mixed-use Commercial and Residential Complex on Lot 1-13, Functional Area No. 1, No. 15 Tran Bach Dang Street, An Khanh Ward, Ho Chi Minh City, Vietnam.",
    phone: "+84-28-39260606",
    hotline: "093 8188796",
    fax: "+84-28-39260505",
    email: "cs1@hcm.kfkingfreight.com",
    position: { top: "83%", left: "45%" },
  },
  {
    name: "Phnom Penh",
    address:
      "Unit No. 12F-03, Morgan Tower, No. 388, Sopheakmongkul Street, Village 14, Sangkat Tole Bassac, Khan Chamkarmon, Phnom Penh, Cambodia.",
    phone: "(855) 85 985 007",
    email: "pnh-ops@pnh.kfkingfreight.com",
    position: { top: "75%", left: "25%" },
  },
  {
    name: "Hanoi",
    address:
      "18th Floor, Detech Building, 8 Ton That Thuyet Street, My Dinh 2 Ward, Nam Tu Liem District, Hanoi Capital, Vietnam.",
    phone: "+84 (0) 243 2055006",
    email: "anna-nguyen@han.kfkingfreight.com",
    position: { top: "15%", left: "30%" },
  },
  {
    name: "Haiphong",
    address:
      "3rd Floor, Rooms 314-315-316-317-318, Thanh Dat 3 Building, 4 Le Thanh Tong Street, Ngo Quyen District, Hai Phong City, Vietnam.",
    phone: "+84 (0) 225 8832747",
    email: "Ruby-Trinh@hph.kfkingfreight.com",
    position: { top: "20%", left: "40%" },
  },
];

type CounterProps = {
  from: number;
  to: number;
  duration?: number;
};

function Counter({ from, to, duration = 2 }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function OfficesAddress() {
  const [selected, setSelected] = useState(offices[0]);

  return (
    <div className="mt-28 max-w-7xl mx-auto px-4 mb-10">
      <motion.h2
        className="font-bold text-4xl text-center mb-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        KFLV Offices
      </motion.h2>
      <motion.p
        className="text-lg text-center mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        King Freight Logistics Vietnam currently operates in 2 countries and has
        4 offices.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Map with pins */}
        <motion.div
          className="relative w-full aspect-[3/2]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/map.png"
            alt="Map"
            width={600}
            height={400}
            className="w-full"
          />
          {offices.map((office) => (
            <button
              key={office.name}
              onClick={() => setSelected(office)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-full bg-white shadow cursor-pointer border ${
                selected.name === office.name
                  ? "bg-red-500 text-white"
                  : "bg-white"
              }`}
              style={office.position}
            >
              📍
              {office.name}
            </button>
          ))}
          <div className="absolute top-[10%] left-[50%] text-center">
            <p className="text-4xl font-bold text-green-600">
              <Counter from={0} to={100} />
            </p>
            <p className="text-lg font-semibold">COUNTRIES WITH AGENTS</p>
          </div>
          <div className="absolute top-[35%] left-[5%] text-center">
            <p className="text-4xl font-bold text-green-600">
              <Counter from={0} to={30} />+
            </p>
            <p className="text-lg font-semibold">
              DOMESTIC AND <br /> INTERNATIONAL PARTNERS
            </p>
          </div>
          <div className="absolute top-[55%] left-[60%] text-center">
            <p className="text-4xl font-bold text-green-600">
              <Counter from={0} to={4} />+
            </p>
            <p className="text-lg font-semibold">
              DOMESTIC AND INTERNATIONAL OFFICES
            </p>
          </div>
        </motion.div>

        {/* Right: Office Info */}
        <motion.div
          className="bg-white rounded-lg shadow p-6 border"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">{selected.name}</h3>
          <p className="mb-10">
            <strong>Address:</strong> {selected.address}
          </p>
          {selected.phone && (
            <p className="mb-10">
              <strong>Phone:</strong> {selected.phone}
            </p>
          )}
          {selected.hotline && (
            <p className="mb-10">
              <strong>Hotline / Zalo:</strong> {selected.hotline}
            </p>
          )}
          {selected.fax && (
            <p className="mb-10">
              <strong>Fax:</strong> {selected.fax}
            </p>
          )}
          {selected.email && (
            <p className="mb-10">
              <strong>Email:</strong> {selected.email}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
