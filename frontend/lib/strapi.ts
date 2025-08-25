export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export function mediaUrl(path?: string | null) {
  if (!path) return "/placeholder.jpg";
  return path.startsWith("http")
    ? path
    : `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export async function strapiGet<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const url = `${STRAPI_URL}${path}`;
  const res = await fetch(url, { ...init, cache: "no-store" });
  if (!res.ok) throw new Error(`Strapi GET failed ${res.status}`);
  return res.json();
}

export async function strapiPost<T>(
  path: string,
  body: any,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    body: JSON.stringify({ data: body }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Strapi POST failed ${res.status}: ${err}`);
  }
  return res.json();
}
