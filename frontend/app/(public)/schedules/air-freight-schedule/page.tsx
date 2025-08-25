import BlogCard from "@/components/BlogCard";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import ScheduleTable from "@/components/schedules/ScheduleTable";
import { getCompanyActivities, getOtherNews, getSchedules } from "@/lib/api";
import { mediaUrl } from "@/lib/strapi";

export default async function AirFreightSchedulePage() {
  const data = await getSchedules("air");
  const schedules = data.data;
  const activities = await getCompanyActivities(3);
  const news = await getOtherNews(3);

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <HeaderBreadcrums />
      {/* Schedule Details */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        {/* Left column: Activity detail */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">Air Freight Schedule</h1>
          <div className="w-full max-w-4xl mx-auto my-8 border rounded-lg overflow-hidden shadow-md">
            {schedules.map((sch: any) => (
              <ScheduleTable key={sch.id} schedule={sch} type="air" />
            ))}
          </div>
        </div>

        {/* Right column: Other activities */}
        <div className="lg:col-span-1">
          <div className="flex flex-col gap-6">
            {/* Other Activities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Other Activities</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
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
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
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
