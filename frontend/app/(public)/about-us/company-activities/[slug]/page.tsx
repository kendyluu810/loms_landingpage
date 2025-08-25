import { notFound } from "next/navigation";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import { mediaUrl } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface Props {
  params: { slug: string };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await Promise.resolve(params);
  // --- Fetch song song để tối ưu ---
  const [detailRes, activitiesRes, newsRes] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=image`,
      { cache: "no-store" }
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[category][$eq]=Company%20Activity&filters[slug][$ne]=${slug}&populate=image&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3`,
      { cache: "no-store" }
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?${[
        "Logistics Knowledge",
        "Corporate Partner",
        "Logistics Market",
      ]
        .map(
          (cat, i) =>
            `filters[$or][${i}][category][$eq]=${encodeURIComponent(cat)}`
        )
        .join(
          "&"
        )}&filters[slug][$ne]=${slug}&populate=image&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3`,
      { cache: "no-store" }
    ),
  ]);

  const detail = await detailRes.json();
  const activities = await activitiesRes.json();
  const news = await newsRes.json();

  if (!detail.data || detail.data.length === 0) return notFound();
  const activity = detail.data[0];
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <HeaderBreadcrums />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 mb-10 px-4 sm:px-6 lg:px-8">
        {/* --- Detail --- */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{activity.title}</h1>
          <p className="text-gray-500 mb-6">
            {new Date(activity.publishedAt).toLocaleDateString()}
          </p>

          <article className="prose prose-lg max-w-none text-gray-800">
            <BlocksRenderer content={activity.content} />
          </article>

          {activity.image && (
            <div className="mt-6">
              <Image
                src={mediaUrl(activity.image.url)}
                alt={activity.image.alternativeText || activity.title}
                width={1200}
                height={600}
                className="rounded-lg object-cover mb-6"
              />
            </div>
          )}
        </div>

        {/* --- Sidebar --- */}
        <div className="flex flex-col gap-10">
          {/* Other Activities */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Other Activities
            </h2>
            <div className="grid gap-4">
              {activities.data?.map((post: any) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  date={new Date(post.publishedAt).toLocaleDateString()}
                  category={post.category}
                  image={post.image ? mediaUrl(post.image.url) : "/default.jpg"}
                  link={`/about-us/company-activities/${post.slug}`}
                />
              ))}
            </div>
          </div>
          {/* Other News */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Other News
            </h2>
            <div className="grid gap-4">
              {news.data?.map((post: any) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  date={new Date(post.publishedAt).toLocaleDateString()}
                  category={post.category}
                  image={post.image ? mediaUrl(post.image.url) : "/default.jpg"}
                  link={`/news/${post.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
