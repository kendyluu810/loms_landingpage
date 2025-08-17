"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { all_blog_data } from "@/data/raw_data";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function NewsDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const news = all_blog_data.find((a) => a.id === Number(id));
  if (!news) return notFound();

  const newsCategories = [
    "Logistics Knowledge",
    "Corporate Partner",
    "Logistics Market",
  ];
  let otherNews = all_blog_data.filter(
    (a) => a.id !== news.id && newsCategories.includes(a.category)
  );

  otherNews = otherNews.sort(() => Math.random() - 0.5);
  otherNews = otherNews.slice(0, 3);

  let otherActivities = all_blog_data.filter(
    (a) => a.id !== news.id && a.category === "Activity"
  );
  otherActivities = otherActivities.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className="flex flex-col">
      <HeaderBreadcrums />
      {/* Main content */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 mt-20 mb-10">
        {/* Left column: News detail */}
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
          <p className="text-gray-500 mb-6">{news.date}</p>
          <p>
            On July 12–13, 2025, the Ho Chi Minh Headquarters team embarked on a
            memorable journey to Phan Thiet, packed with dynamic teambuilding
            activities that strengthened team spirit and reflected our core
            motto: <strong>“Keep Forward, Lift Values.”</strong>
          </p>
          <div className="mt-6">
            <Image
              src={news.image}
              alt={news.title}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right column: Other activities */}
        <div className="flex flex-col space-y-8">
          {/* Other News */}
          <div>
            <h2 className="font-semibold text-3xl mb-4">Other News</h2>
            <div className="space-y-4">
              {otherNews.map((item) => (
                <BlogCard
                  key={item.id}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  link={`/news/${item.id}`}
                />
              ))}
            </div>
          </div>

          {/* Other Activities */}
          <div>
            <h2 className="font-semibold text-3xl mb-4">Other Activities</h2>
            <div className="space-y-4">
              {otherActivities.map((item) => (
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
    </div>
  );
}
