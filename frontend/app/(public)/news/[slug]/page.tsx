import { notFound } from "next/navigation";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type PostItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  category: string;
  content?: any[];
};

async function fetchPostBySlug(slug: string): Promise<PostItem | null> {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=image`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) return null;

    const data = await res.json();
    const post = data.data?.[0];
    if (!post) return null;

    return {
      id: post.documentId || post.id,
      slug: post.slug,
      title: post.title,
      date: new Date(post.publishedAt).toLocaleDateString("en-GB"),
      image: post.image?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`
        : "/placeholder.jpg",
      category: post.category,
      content: Array.isArray(post.content) ? post.content : [], // ✅ fix here
    };
  } catch (e) {
    console.error("Error fetchPostBySlug:", e);
    return null;
  }
}

async function fetchOtherPosts(
  excludeSlug: string,
  categories: string[],
  limit = 3
): Promise<PostItem[]> {
  try {
    // ✅ build filter query with $or
    const filterQuery = categories
      .map(
        (cat, i) =>
          `filters[$or][${i}][category][$eq]=${encodeURIComponent(cat)}`
      )
      .join("&");

    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=image&sort=publishedAt:desc&filters[slug][$ne]=${excludeSlug}&${filterQuery}&pagination[pageSize]=${limit}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];

    const data = await res.json();

    return (
      data.data?.map((post: any) => ({
        id: post.documentId || post.id,
        slug: post.slug,
        title: post.title,
        date: new Date(post.publishedAt).toLocaleDateString("en-GB"),
        image: post.image?.url
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`
          : "/placeholder.jpg",
        category: post.category,
      })) || []
    );
  } catch (e) {
    console.error("Error fetchOtherPosts:", e);
    return [];
  }
}

export default async function NewsDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await Promise.resolve(params);
  const news = await fetchPostBySlug(slug);
  if (!news) return notFound();

  // Other News
  const otherNewsCategories = [
    "Logistics Knowledge",
    "Corporate Partner",
    "Logistics Market",
  ];
  const otherNews = await fetchOtherPosts(news.slug, otherNewsCategories);

  // Other Activities
  const otherActivities = await fetchOtherPosts(news.slug, [
    "Company Activity",
  ]);
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <HeaderBreadcrums />
      {/* Main content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 mb-10 px-4 sm:px-6 lg:px-8">
        {/* Left column: News detail */}
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
          <p className="text-gray-500 mb-6">{news.date}</p>

          <article className="prose prose-lg max-w-none">
            <BlocksRenderer content={news.content || []} />
          </article>

          <div className="mt-6">
            <Image
              src={news.image}
              alt={news.title}
              width={800}
              height={400}
              className="rounded-lg object-cover mb-6"
            />
          </div>
        </div>

        {/* Right column: Other activities */}
        <div className="flex flex-col gap-10">
          {/* Other News */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Other News
            </h2>
            <div className="grid gap-4">
              {otherNews.map((item) => (
                <BlogCard
                  key={item.id}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  link={`/news/${item.slug}`}
                />
              ))}
            </div>
          </div>

          {/* Other Activities */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Other Activities
            </h2>
            <div className="grid gap-4">
              {otherActivities.map((item) => (
                <BlogCard
                  key={item.id}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  link={`/about-us/company-activities/${item.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
