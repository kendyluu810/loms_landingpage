"use client";
import { all_blog_data } from "@/data/raw_data";
import BlogCard from "@/components/BlogCard";
import { FaWallet, FaBoxOpen, FaShippingFast } from "react-icons/fa";
import { MdEmail, MdLocalShipping, MdPhone } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

const steps = [
  { icon: <FaWallet size={20} />, label: "Awaiting confirmation" },
  { icon: <FaBoxOpen size={20} />, label: "Waiting to pick up the goods" },
  {
    icon: <FaShippingFast size={20} />,
    label: "Arriving to pick up the goods",
  },
  { icon: <MdLocalShipping size={20} />, label: "In transit" },
  { icon: <FaBoxOpen size={20} />, label: "Delivered" },
];

export default function LandTransportSchedulePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Land transport details */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 mt-20">
        {/* Left column: Activity detail */}
        <div className="col-span-2 space-y-8">
          <h1 className="text-4xl font-bold mb-4">Land Freight Schedule</h1>
          <p>
            At King Freight Logistics Vietnam, we take pride in providing our
            customers with a convenient and modern service by allowing them to
            track online and receive real-time updates on the status of their
            road transportation shipments.
          </p>
          {/* Steps */}
          <div className="flex items-center justify-center w-full mt-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Circle with icon */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <p className="text-center text-gray-600 text-sm mt-2 max-w-[100px]">
                    {step.label}
                  </p>
                </div>

                {/* Line between circles (except last one) */}
                {index < steps.length - 1 && (
                  <div className="w-16 h-[2px] bg-green-600"></div>
                )}
              </div>
            ))}
          </div>
          <p>
            Customers can easily access our system from any internet-connected
            device, anytime they wish, to track the current location of their
            goods, estimate delivery times, and monitor all updates regarding
            shipment status. This not only enhances transparency and reliability
            in the transportation process but also reduces customer concerns and
            uncertainties, thereby improving customer experience and maximizing
            satisfaction with our top-tier shipping services.
          </p>
          <p>
            Please contact our Customer Care department for login information.
          </p>
          <ul className=" mt-5 space-y-4">
            <li>
              <Link
                className="flex flex-row items-center gap-2 mb-2"
                href="mailto:cs1@hcm.kfkingfreight.com"
              >
                <MdEmail />
                cs1@hcm.kfkingfreight.com
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row items-center gap-2 mb-2"
                href="tel:0938188796"
              >
                <MdPhone />
                0938188796
              </Link>
            </li>
          </ul>
          <Button className="mt-6 bg-[#36a158] hover:bg-[#a2d236] text-lg font-semibold gap-4 text-white hover:text-black border rounded-[6px]">
            Send Request <ChevronRight width={16} height={16} />
          </Button>
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
