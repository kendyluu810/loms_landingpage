"use client";
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
import { all_blog_data } from "@/data/raw_data";
import { useEffect, useState } from "react";

export default function CompanyActivitiesPage() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const activities = all_blog_data.filter(
    (item) => item.category === "Activity"
  );
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const currentData = activities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const goto = (page: number) =>
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* cargo ship activities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        {/* Add content for company activities here */}
        {currentData.map((activity, index) => (
          <BlogCard
            key={(currentPage - 1) * itemsPerPage + index}
            image={activity.image}
            date={activity.date}
            title={activity.title}
            link={`/about-us/company-activities/${activity.id}`}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-10 mb-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  goto(currentPage - 1);
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    goto(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  goto(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
