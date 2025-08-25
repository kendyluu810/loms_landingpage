"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import LogoCarousel from "@/components/layout/Home/LogoCarousel";
import CompanyOverview from "@/components/layout/Home/CompanyOverview";
import OurServices from "@/components/layout/Home/OurServices";
import SpecializationSection from "@/components/layout/Home/SpecializationSection";
import OfficesAddress from "@/components/layout/Home/OfficeAddress";

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
export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero Image */}
      <div className="relative w-screen h-[500px] md:h-[720px] lg:h-[960px]">
        <Image
          src="/cargo_ship.jpg"
          alt="Cargo Ship"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30">
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold uppercase">
            King Freight
          </h2>
          <p className="text-sm md:text-lg lg:text-xl font-medium uppercase">
            is always a pioneer in the logistics industry
          </p>
          <p className="text-sm mt-10 md:mt-20 md:text-lg lg:text-xl font-medium uppercase">
            KING FREIGHT 始終是物流行業的先行者
          </p>
        </div>
        <div className="absolute -bottom-16 w-full flex flex-wrap justify-center gap-4 md:gap-6 px-4">
          <div className="flex flex-col justify-center bg-green-600 text-white px-6 md:px-12 py-6 md:py-8 rounded-lg text-center shadow-lg min-w-[140px]">
            <p className="text-2xl sm:text-5xl md:text-7xl font-bold">
              <Counter from={0} to={30} />+
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Years of experience
            </p>
          </div>

          <div className="flex flex-col justify-center bg-green-600 text-white px-6 md:px-12 py-6 md:py-8 rounded-lg text-center shadow-lg min-w-[140px]">
            <p className="text-2xl sm:text-5xl md:text-7xl font-bold">
              <Counter from={0} to={100} />+
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Countries with Agents
            </p>
          </div>

          <div className="flex flex-col justify-center bg-green-600 text-white px-6 md:px-12 py-6 md:py-8 rounded-lg text-center shadow-lg min-w-[140px]">
            <p className="text-2xl sm:text-5xl md:text-7xl font-bold">
              <Counter from={0} to={6000} />+
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              TEUs per month
            </p>
          </div>
        </div>
      </div>
      <CompanyOverview />
      <LogoCarousel />
      <OurServices />
      <SpecializationSection />
      <OfficesAddress />
    </div>
  );
}
