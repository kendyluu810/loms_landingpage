import BlogCard from "@/components/BlogCard";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { mediaUrl } from "@/lib/strapi";

type PostItem = {
  id: number;
  title: string;
  category: string;
  content: string;
  publishedAt: string;
  slug: string;
  image?: { url: string; alternativeText?: string };
};

type StrapiList<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export default async function CompanyActivitiesPage({
  searchParams,
}: {
  searchParams: { page?: string } | Promise<{ page?: string }>;
}) {
  const { page } = await Promise.resolve(searchParams as { page?: string });
  const currentPage = parseInt(page || "1", 10);
  const itemsPerPage = 12;

  // --- Fetch server-side ---
  const qs = `?filters[category][$eq]=Company%20Activity&populate=image&sort=publishedAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}`;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts${qs}`,
    { cache: "no-store" }
  );
  const data: StrapiList<PostItem> = await res.json();

  const items = data.data;
  const totalPages = data.meta.pagination.pageCount;

  return (
    <div className="w-full flex flex-col items-center justify-center mb-10">
      <HeaderBreadcrums />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 mt-20">
        {/* cargo ship activities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((post) => (
            <BlogCard
              key={post.id}
              image={
                post.image?.url ? mediaUrl(post.image.url) : "/placeholder.jpg"
              }
              date={new Date(post.publishedAt).toLocaleDateString()}
              title={post.title}
              link={`/about-us/company-activities/${post.slug}`}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-10 mb-5 flex justify-center">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={`?page=${currentPage - 1}`} />
                </PaginationItem>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href={`?page=${page}`}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext href={`?page=${currentPage + 1}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
