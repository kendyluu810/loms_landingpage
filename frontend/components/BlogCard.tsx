"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  category?: string; // Optional category for the card
  link?: string; // Optional link for the card
}

export default function BlogCard({
  image,
  date,
  title,
  category,
  link,
}: BlogCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white border w-full">
      <Link href={link || "#"} className="block w-full">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden"
        >
          <Image
            src={image}
            alt={title}
            width={380}
            height={380}
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>
              <Calendar width={16} height={16} />
            </span>
            <span>{date}</span>
          </div>
          <h3 className="mt-2 font-semibold text-lg sm:text-base line-clamp-2 hover:text-green-600 transition-colors duration-200">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
