import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  link?: string; // Optional link for the card
}

export default function BlogCard({ image, date, title, link }: BlogCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white border">
      <Link href={link || "#"}>
        <div className="overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={title}
              width={380}
              height={380}
              className="object-cover w-full h-60"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>📅</span>
            <span>{date}</span>
          </div>
          <h3 className="mt-2 font-semibold text-lg hover:text-green-600 transition-colors duration-200">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
