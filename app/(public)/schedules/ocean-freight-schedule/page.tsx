"use client";
import { AnimatePresence, motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import { all_blog_data } from "@/data/raw_data";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function OceanFreightSchedulePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Schedule Details */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 mt-20">
        {/* Left column: Activity detail */}
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-4">Ocean Freight Schedule</h1>
          <div className="w-full max-w-4xl mx-auto my-8 border rounded-lg overflow-hidden shadow-md">
            {/* Header chính */}
            <div className="bg-green-700 text-white px-4 py-3 text-xl font-bold">
              From Ho Chi Minh City to Taiwan
            </div>

            {/* Subtitle (Collapsible Trigger) */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center  hover:text-green-500  font-semibold text-lg px-4 py-3 cursor-pointer transition-colors"
            >
              <span>
                The shipping schedule from Ho Chi Minh City to Taiwan (June
                2025){" "}
              </span>
              <div className="flex items-center gap-3">
                <Download
                  size={18}
                  className="hover:text-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Download file...");
                  }}
                />
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </div>

            {/* Nội dung bảng */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t overflow-hidden"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse mt-4">
                      <thead>
                        <tr className="bg-gray-800 text-white">
                          <th className="p-2 border">NO</th>
                          <th className="p-2 border">VESSEL NAME</th>
                          <th className="p-2 border">VOYAGE NO.</th>
                          <th className="p-2 border">CUT OFF SI*</th>
                          <th className="p-2 border">CUT OFF CARGO*</th>
                          <th className="p-2 border">ETD</th>
                          <th className="p-2 border">ETA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "WAN HAI 288",
                            "N090",
                            "04 Jun",
                            "04 Jun",
                            "07 Jun",
                            "12 Jun",
                          ],
                          [
                            "WAN HAI 287",
                            "N055",
                            "11 Jun",
                            "11 Jun",
                            "14 Jun",
                            "19 Jun",
                          ],
                          [
                            "WAN HAI 289",
                            "N065",
                            "18 Jun",
                            "18 Jun",
                            "21 Jun",
                            "24 Jun",
                          ],
                          [
                            "WAN HAI 288",
                            "N091",
                            "25 Jun",
                            "25 Jun",
                            "28 Jun",
                            "05 Jul",
                          ],
                        ].map((row, idx) => (
                          <tr key={idx} className="text-center">
                            <td className="border p-2">{idx + 1}</td>
                            {row.map((col, i) => (
                              <td
                                key={i}
                                className={`border p-2 ${
                                  i === 4 ? "text-red-500 font-bold" : ""
                                }`}
                              >
                                {col}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-3 text-xs text-gray-600">
                    *Cut Off SI at 3PM every Tuesday evening. *Cut Off Cargo at
                    2PM every Wednesday evening. <br />
                    Stuffing Place: Warehouse No.01 – Gate 15 – Cat Lai <br />
                    <span className="text-blue-600 font-medium">
                      ***Subject to roll, delay, change vessel with or without
                      prior notice due to peak season***
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right column: Other activities */}
        <div>
          <h2 className="font-semibold text-3xl mb-4">Other Activities</h2>
          <div className="space-y-4">
            {all_blog_data
              .slice(0, 3) // chỉ lấy 3 bài
              .map((item) => (
                <BlogCard
                  key={item.id}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  link={`/about-us/company-activities/${item.id}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
