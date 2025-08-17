"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { all_blog_data } from "@/data/raw_data";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function ActivityDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const activity = all_blog_data.find((a) => a.id === Number(id));
  if (!activity) return notFound();
  let otherActivities = all_blog_data.filter(
    (a) => a.id !== activity.id && a.category === activity.category
  );
  otherActivities = otherActivities.sort(() => Math.random() - 0.5);
  otherActivities = otherActivities.slice(0, 3);
  const newsCategories = [
    "Logistics Knowledge",
    "Corporate Partner",
    "Logistics Market",
  ]; // Lọc các bài thuộc nhóm News và khác bài hiện tại
  let otherNews = all_blog_data.filter(
    (a) => a.id !== activity.id && newsCategories.includes(a.category)
  ); // Trộn mảng ngẫu nhiên
  otherNews = otherNews.sort(() => Math.random() - 0.5); // Lấy 3 bài
  otherNews = otherNews.slice(0, 3);
  return (
    <div className="flex flex-col">
      <HeaderBreadcrums />
      {/* Main content */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 mt-20 mb-10">
        {/* Left column: Activity detail */}
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-4">{activity.title}</h1>
          <p className="text-gray-500 mb-6">{activity.date}</p>
          <p>
            {" "}
            On July 12–13, 2025, the Ho Chi Minh Headquarters team embarked on a
            memorable journey to Phan Thiet, packed with dynamic teambuilding
            activities that strengthened team spirit and reflected our core
            motto: <strong>“Keep Forward, Lift Values.”</strong>{" "}
          </p>
          <div className="mt-6">
            <Image
              src={activity.image}
              alt={activity.title}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Right column: Other activities & Other News */}
        <div className="flex flex-col space-y-4 justify-center items-center">
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
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h2 className="font-semibold text-3xl mb-4">Other News</h2>{" "}
            <div className="space-y-4">
              {" "}
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
        </div>
      </div>
    </div>
  );
}
