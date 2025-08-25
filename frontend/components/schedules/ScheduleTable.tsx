"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

export default function ScheduleTable({
  schedule,
  type,
}: {
  schedule: any;
  type: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDownload = () => {
    window.open(`/api/schedule-pdf?type=${type}`, "_blank");
  };
  return (
    <>
      {/* Header chính */}
      <div className="bg-green-700 text-white px-4 py-3 text-xl font-bold">
        {schedule.title}
      </div>

      {/* Subtitle (Collapsible Trigger) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center hover:text-green-600 font-semibold text-lg px-4 py-3 cursor-pointer transition-colors"
      >
        <span>
          {schedule.subtitle}{" "}
          <span className="text-gray-400">({schedule.month})</span>
        </span>
        <div className="flex items-center gap-3">
          <Download
            size={18}
            className="hover:text-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
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
            {/* Bảng cho màn hình >= md */}
            <div className="hidden md:block overflow-x-auto">
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
                  {schedule.rows?.map((row: any, idx: number) => (
                    <tr key={idx} className="text-center">
                      <td className="border p-2">{idx + 1}</td>
                      <td className="border p-2">{row.vesselName}</td>
                      <td className="border p-2">{row.voyageNo}</td>
                      <td className="border p-2">{row.cutOffSi}</td>
                      <td className="border p-2">{row.cutOffCargo}</td>
                      <td className="border p-2 text-red-500 font-bold">
                        {row.etd}
                      </td>
                      <td className="border p-2">{row.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card view cho mobile */}
            <div className="block md:hidden mt-4 space-y-3 px-2">
              {schedule.rows?.map((row: any, idx: number) => (
                <div
                  key={idx}
                  className="border rounded-lg shadow-sm p-3 text-sm bg-white"
                >
                  <div className="flex justify-between font-bold">
                    <span>{row.vesselName}</span>
                    <span className="text-red-500">{row.etd}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Voyage: {row.voyageNo}
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span>SI: {row.cutOffSi}</span>
                    <span>Cargo: {row.cutOffCargo}</span>
                  </div>
                  <div className="mt-1 text-xs text-gray-700">
                    ETA: {row.eta}
                  </div>
                </div>
              ))}
            </div>

            {schedule.notes && (
              <div className="p-3 text-xs text-gray-600">{schedule.notes}</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
