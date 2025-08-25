import SectionSwiper from "@/components/SectionSwiper";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";

type PostItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  category: string;
};

async function fetchPostsByCategory(category: string): Promise<PostItem[]> {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_STRAPI_URL
    }/api/posts?populate=image&sort=publishedAt:desc&filters[category][$eq]=${encodeURIComponent(
      category
    )}`;
    console.log("Server Fetching:", url);

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.error(
        `Failed to fetch posts for category ${category}:`,
        res.statusText
      );
      return [];
    }

    const data = await res.json();

    return (
      data.data?.map((post: any) => {
        return {
          id: post.documentId || post.id,
          slug: post.slug ?? post.documentId ?? String(post.id),
          title: post.title ?? "Untitled",
          date: new Date(post.publishedAt).toLocaleDateString("en-GB"),
          image: post.image?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`
            : "/placeholder.jpg",
          category: post.category ?? "Uncategorized",
        };
      }) || []
    );
  } catch (error) {
    console.error(`Error fetching posts for category ${category}:`, error);
    return [];
  }
}

export default async function NewsPage() {
  const [logisticsPosts, corporatePosts, knowledgePosts] = await Promise.all([
    fetchPostsByCategory("Logistics Market"),
    fetchPostsByCategory("Corporate Partner"),
    fetchPostsByCategory("Logistics Knowledge"),
  ]);
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      <div className="mt-14 space-y-16">
        {/* Logistics Market */}
        <SectionSwiper
          title="Logistics Market"
          data={logisticsPosts}
          category="Logistics Market"
          linkPrefix="/news"
        />
        {/* Corporate Partner */}
        <SectionSwiper
          title="Corporate Partners"
          data={corporatePosts}
          category="Corporate Partner"
          linkPrefix="/news"
        />
        {/* Logistics Knowledge */}
        <SectionSwiper
          title="Logistics Knowledge"
          data={knowledgePosts}
          category="Logistics Knowledge"
          linkPrefix="/news"
        />
      </div>
    </div>
  );
}
