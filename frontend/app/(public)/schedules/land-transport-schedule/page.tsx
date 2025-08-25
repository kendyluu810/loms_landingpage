import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { MdEmail, MdLocalShipping, MdPhone } from "react-icons/md";
import { FaWallet, FaBoxOpen, FaShippingFast } from "react-icons/fa";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import { getCompanyActivities, getOtherNews } from "@/lib/api";
import { mediaUrl } from "@/lib/strapi";

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

export default async function LandTransportSchedulePage() {
  const activities = await getCompanyActivities(3);
  const news = await getOtherNews(3);
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <HeaderBreadcrums />
      {/* Land transport details */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-4 sm:px-6 lg:px-8">
        {/* Left column: Activity detail */}
        <div className="md:col-span-2 space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Land Freight Schedule
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            At King Freight Logistics Vietnam, we take pride in providing our
            customers with a convenient and modern service by allowing them to
            track online and receive real-time updates on the status of their
            road transportation shipments.
          </p>
          {/* Steps */}
          <div className="flex flex-wrap justify-center w-full mt-8 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Circle with icon */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <p className="text-center text-gray-600 text-xs sm:text-sm mt-2 max-w-[80px] sm:max-w-[100px]">
                    {step.label}
                  </p>
                </div>

                {/* Line between circles (except last one) */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block w-8 sm:w-16 h-[2px] bg-green-600"></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            Customers can easily access our system from any internet-connected
            device, anytime they wish, to track the current location of their
            goods, estimate delivery times, and monitor all updates regarding
            shipment status. This not only enhances transparency and reliability
            in the transportation process but also reduces customer concerns and
            uncertainties, thereby improving customer experience and maximizing
            satisfaction with our top-tier shipping services.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Please contact our Customer Care department for login information.
          </p>
          <ul className="mt-5 space-y-3 text-sm sm:text-base">
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
          <Link href="/contact/support">
            <Button className="mt-6 bg-[#36a158] hover:bg-[#a2d236] text-base sm:text-lg font-semibold gap-4 text-white hover:text-black border rounded-md">
              Send Request <ChevronRight width={16} height={16} />
            </Button>
          </Link>
        </div>

        {/* Right column: Other activities */}
        <div className="md:col-span-1">
          <div className="flex flex-col gap-6">
            {/* Other Activities */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Other Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {activities.data?.map((post: any) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    date={new Date(post.publishedAt).toLocaleDateString()}
                    category={post.category}
                    image={
                      post.image ? mediaUrl(post.image.url) : "/default.jpg"
                    }
                    link={`/about-us/company-activities/${post.slug}`}
                  />
                ))}
              </div>
            </div>
            {/* Other News */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Other News</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {news.data?.map((post: any) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    date={new Date(post.publishedAt).toLocaleDateString()}
                    category={post.category}
                    image={
                      post.image ? mediaUrl(post.image.url) : "/default.jpg"
                    }
                    link={`/news/${post.slug}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
