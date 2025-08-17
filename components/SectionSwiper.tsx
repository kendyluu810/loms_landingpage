"use client";

import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";

interface SectionSwiperProps {
  title: string;
  data: {
    id: string | number;
    image: string;
    date: string;
    title: string;
    category?: string;
  }[];
  linkPrefix: string;
  category?: string;
  buttonText?: string;
}

export default function SectionSwiper({
  title,
  data,
  linkPrefix,
  category,
  buttonText = "See more",
}: SectionSwiperProps) {
  const filteredData = category
    ? data.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      )
    : data;

  return (
    <div className="flex flex-col justify-center items-center mt-14 space-y-8">
      <h2 className="font-bold text-5xl mt-1">{title}</h2>
      <div className="w-full max-w-6xl">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{
            paddingBottom: "3.5rem", // khoảng cách giữa card và pagination
          }}
        >
          {filteredData.map((item) => (
            <SwiperSlide key={item.id} className="space-y-8">
              <BlogCard
                image={item.image}
                date={item.date}
                title={item.title}
                link={`${linkPrefix}/${item.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button
        asChild
        className="mt-2 bg-[#36a158] hover:bg-[#a2d236] gap-4 p-6 text-white hover:text-black border rounded-lg"
      >
        <Link
          href={`${linkPrefix}/category/${category
            ?.toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="flex items-center justify-center space-x-4"
        >
          <p className="text-lg font-semibold">{buttonText}</p>
          <ChevronRight width={16} height={16} />
        </Link>
      </Button>
    </div>
  );
}
