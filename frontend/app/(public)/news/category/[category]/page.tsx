"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

export default function NewsCategoryPage() {
  const { category } = useParams<{ category?: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;
  const perPage = 6;

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const enumCategory = category
          ? category
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")
          : "";

        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_STRAPI_URL
          }/api/posts?filters[category][name][$eq]=${encodeURIComponent(
            enumCategory
          )}&populate=*`,
          { cache: "no-store" }
        );
        if (!res.ok) {
          console.error("Fetch failed:", res.statusText);
          setPosts([]);
          return;
        }

        const json = await res.json();
        const mapped =
          json.data?.map((post: any) => ({
            id: post.documentId || post.id,
            slug: post.slug || String(post.documentId || post.id),
            title: post.title || "Untitled",
            date: post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("en-GB")
              : "",
            image: post.image?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`
              : "/placeholder.jpg",
            category: post.category || "Uncategorized",
          })) || [];
        setPosts(mapped);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        {Array.from({ length: perPage }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  const totalPages = Math.ceil(posts.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedData = posts.slice(startIndex, startIndex + perPage);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <HeaderBreadcrums />
        <p className="font-semibold text-2xl mt-10 mb-10">
          No articles found in this category.
        </p>
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
            link={`/news/${item.slug || item.id}`}
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
