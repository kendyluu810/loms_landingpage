"use client";
import { all_blog_data } from "@/data/raw_data";
import SectionSwiper from "@/components/SectionSwiper";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function NewsPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      <div className="mt-14"></div>
      {/* Logistics Market */}
      <SectionSwiper
        title="Logistics Market"
        data={all_blog_data}
        category="Logistics Market"
        linkPrefix="/news"
      />
      {/* Corporate Partner */}
      <SectionSwiper
        title="Corporate Partners"
        data={all_blog_data}
        category="Corporate Partner"
        linkPrefix="/news"
      />
      {/* Logistics Knowledge */}
      <SectionSwiper
        title="Logistics Knowledge"
        data={all_blog_data}
        category="Logistics Knowledge"
        linkPrefix="/news"
      />
    </div>
  );
}
