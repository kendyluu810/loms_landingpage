const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

// ========== POSTS (News + Company Activities) ==========
export async function getPosts() {
  const res = await fetch(`${API_URL}/api/posts?populate=category`, {
    cache: "no-store", // để luôn lấy dữ liệu mới
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

//======== Fetch Post by Slug ========
export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch post");

  const json = await res.json();
  return json.data?.[0] || null;
}

// --- Fetch company activities ---
export async function getCompanyActivities(limit: number = 3) {
  const res = await fetch(
    `${API_URL}/api/posts?filters[category][$eq]=Company%20Activity&populate=image&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch company activities");
  return res.json();
}

// --- Fetch news from 3 categories ---
export async function getOtherNews(limit: number = 3) {
  const categories = [
    "Logistics Knowledge",
    "Corporate Partners",
    "Logistics Market",
  ];
  const filterQuery = categories
    .map(
      (cat, i) => `filters[$or][${i}][category][$eq]=${encodeURIComponent(cat)}`
    )
    .join("&");

  const res = await fetch(
    `${API_URL}/api/posts?${filterQuery}&populate=image&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch other news");
  return res.json();
}

// ========== SCHEDULES ==========
export async function getSchedules(type: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/schedules?filters[type][$eq]=${type}&populate=rows`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch schedules");
  return res.json();
}

// ========== CONTACT / SUPPORT ==========
export async function submitSupport(formData: Record<string, any>) {
  const res = await fetch(`${API_URL}/api/supports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: formData }), // Strapi v4/v5 yêu cầu gói trong data
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error?.message || "Failed to submit support form");
  }

  return res.json();
}
