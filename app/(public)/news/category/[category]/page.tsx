"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { all_blog_data } from "@/data/raw_data";
import BlogCard from "@/components/BlogCard";
import BreadcrumbMenu from "@/components/BreadcrumbMenu";
import Image from "next/image";
import { useEffect } from "react";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function NewsCategoryPage() {
  const { category } = useParams<{ category?: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;
  const perPage = 6;

  if (!category) {
    return <div>Loading...</div>;
  }

  // Lọc dữ liệu dựa trên slug
  const filteredData = all_blog_data.filter(
    (item) =>
      item.category?.toLowerCase().replace(/\s+/g, "-") ===
      category.toLowerCase()
  );

  const totalPages = Math.ceil(filteredData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Nếu không tìm thấy dữ liệu
  if (filteredData.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-10">
        <BreadcrumbMenu pageTitle={category.replace(/-/g, " ")} />
        <h1 className="text-4xl font-bold mb-8 capitalize">
          {category.replace(/-/g, " ")}
        </h1>
        <p>No articles found in this category.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        {paginatedData.map((item) => (
          <BlogCard
            key={item.id}
            image={item.image}
            date={item.date}
            title={item.title}
            link={`/news/${item.id}`}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-10 mb-20">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              router.push(`/news/category/${category}?page=${currentPage - 1}`)
            }
            className={`px-4 py-2 border rounded-lg ${
              currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              router.push(`/news/category/${category}?page=${currentPage + 1}`)
            }
            className={`px-4 py-2 border rounded-lg ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
