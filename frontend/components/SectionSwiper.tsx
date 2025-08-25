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
    slug?: string;
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
    <div className="flex flex-col justify-center items-center mt-14 space-y-8 w-full">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-1">
        {title}
      </h2>

      <div className="w-full px-2 sm:px-6 lg:px-8 max-w-6xl">
        {filteredData.length > 0 ? (
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={3} // luôn hiển thị 3 post
            slidesPerGroup={3} // swipe 1 lần -> qua 3 post
            spaceBetween={24}
            style={{ paddingBottom: "3.5rem" }}
          >
            {filteredData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="w-full">
                  <BlogCard
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    link={`${linkPrefix}/${item.slug}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
      {category && (
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
      )}
    </div>
  );
}
