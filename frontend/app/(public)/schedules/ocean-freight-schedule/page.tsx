import BlogCard from "@/components/BlogCard";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import ScheduleTable from "@/components/schedules/ScheduleTable";
import { getCompanyActivities, getOtherNews, getSchedules } from "@/lib/api";
import { mediaUrl } from "@/lib/strapi";

export default async function OceanFreightSchedulePage() {
  const data = await getSchedules("ocean");
  const schedules = data.data;
  const activities = await getCompanyActivities(3);
  const news = await getOtherNews(3);

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mb-10">
      <HeaderBreadcrums />
      {/* Schedule Details */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 lg:mt-20">
        {/* Left column: Activity detail */}
        <div className="md:col-span-2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left">
            Ocean Freight Schedule
          </h1>
          <div className="w-full mx-auto my-6 border rounded-lg overflow-hidden shadow-md">
            {schedules.map((sch: any) => (
              <ScheduleTable key={sch.id} schedule={sch} type="ocean" />
            ))}
          </div>
        </div>

        {/* Right column: Other activities */}
        <div className="md:col-span-1">
          <div className="flex flex-col gap-8">
            {/* Other Activities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Other Activities</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
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
              <h2 className="text-2xl font-bold mb-4">Other News</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
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
