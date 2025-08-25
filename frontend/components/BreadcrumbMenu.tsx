"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { menuItems } from "./menuItem";
import { all_blog_data } from "@/data/raw_data";
import { getPostBySlug } from "@/lib/api";
import { useEffect, useState } from "react";

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface Crumb {
  label: string;
  href?: string; // optional
}

const capitalizeWords = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const breadcrumbOverrides: Record<
  string,
  | { title: string; crumbs: { label: string; href: string }[] }
  | ((
      slug: string
    ) => Promise<{ title: string; crumbs: { label: string; href: string }[] }>)
> = {
  "/about-us/vision-spirit-core-values": {
    title: "Vision - Spirit - Core Values",
    crumbs: [{ label: "About us", href: "/about-us/overview" }],
  },
  "/about-us/company-activities": {
    title: "Company Activities",
    crumbs: [{ label: "About us", href: "/about-us/overview" }],
  },
  "/about-us/company-activities/[slug]": async (slug: string) => {
    const activity = await getPostBySlug(slug);

    return {
      title: activity?.attributes?.title || "Company Activity",
      crumbs: [{ label: "About us", href: "/about-us/company-activities" }],
    };
  },

  "/services/ocean-freight": {
    title: "Ocean Freight",
    crumbs: [{ label: "Ocean Freight", href: "/services/ocean-freight" }],
  },

  "/services/air-freight": {
    title: "Air Freight",
    crumbs: [{ label: "Air Freight", href: "/services/air-freight" }],
  },

  "/services/land-transport": {
    title: "Land Transport",
    crumbs: [{ label: "Land Transport", href: "/services/land-transport" }],
  },

  "/services/support": {
    title: "Support",
    crumbs: [{ label: "Support Services", href: "/services/support" }],
  },
  "/schedules/ocean-freight-schedule": {
    title: "Ocean Freight Schedule",
    crumbs: [
      {
        label: "Ocean Freight Schedule",
        href: "/schedules/ocean-freight-schedule",
      },
    ],
  },
  "/schedules/air-freight-schedule": {
    title: "Air Freight Schedule",
    crumbs: [
      {
        label: "Air Freight Schedule",
        href: "/schedules/air-freight-schedule",
      },
    ],
  },
  "/schedules/land-transport-schedule": {
    title: "Land Transport Schedule",
    crumbs: [
      {
        label: "Land Transport Schedule",
        href: "/schedules/land-transport-schedule",
      },
    ],
  },
  "/news": {
    title: "News",
    crumbs: [{ label: "News", href: "/news" }],
  },

  "/news/[slug]": async (slug: string) => {
    const news = await getPostBySlug(slug);
    const categoryName = news?.attributes?.category || "News";
    return {
      title: news?.attributes?.title || categoryName,
      crumbs: [{ label: "News", href: "/news" }],
    };
  },

  "/news/category/[category]": async (category: string) => {
    const formattedCategory = capitalizeWords(category);
    return {
      title: formattedCategory,
      crumbs: [{ label: "News", href: "/news" }],
    };
  },
  "/contact/support": {
    title: "Support",
    crumbs: [{ label: "Contact", href: "/contact" }],
  },
  "/contact/recruitment": {
    title: "Recruitment",
    crumbs: [{ label: "Contact", href: "/contact" }],
  },
};

function findBreadcrumbPath(path: string, items: MenuItem[]): MenuItem[] {
  for (const item of items) {
    if (item.href && path.startsWith(item.href)) {
      return [item];
    }
    if (item.children) {
      const childPath = findBreadcrumbPath(path, item.children);
      if (childPath.length > 0) {
        return [item, ...childPath];
      }
    }
  }
  return [];
}

export default function BreadcrumbMenu({ pageTitle }: { pageTitle?: string }) {
  const pathname = usePathname();
  const params = useParams<{ slug?: string; category?: string }>();
  const [crumbs, setCrumbs] = useState<Crumb[]>([]);
  const [finalTitle, setFinalTitle] = useState<string>();

  useEffect(() => {
    if (!pathname) return;

    async function loadBreadcrumb() {
      const keys = Object.keys(breadcrumbOverrides);

      keys.sort((a, b) => {
        const aDynamic = a.includes("[");
        const bDynamic = b.includes("[");
        return aDynamic === bDynamic ? 0 : aDynamic ? -1 : 1;
      });

      const overrideKey = keys.find((key) => {
        if (key.includes("[slug]") && params.slug) {
          const basePath = key.replace("/[slug]", "");
          return pathname.startsWith(basePath + "/");
        }
        if (key.includes("[category]") && params.category) {
          const basePath = key.replace("/[category]", "");
          return pathname.startsWith(basePath + "/");
        }
        return pathname === key || pathname.startsWith(key + "/");
      });

      if (overrideKey) {
        const override = breadcrumbOverrides[overrideKey];

        if (typeof override === "function") {
          if (params.slug) {
            const result = await override(params.slug);
            setCrumbs(result.crumbs);
            setFinalTitle(result.title);
          } else if (params.category) {
            const result = await override(params.category);
            setCrumbs(result.crumbs);
            setFinalTitle(result.title);
          }
        } else {
          setCrumbs(override.crumbs);
          setFinalTitle(override.title);
        }
      } else {
        // fallback
        const foundPath = findBreadcrumbPath(pathname, menuItems);
        const norm = foundPath
          .filter((item) => typeof item.href === "string")
          .map((item) => ({ label: item.label, href: item.href! }));
        setCrumbs(norm);
        setFinalTitle(
          pageTitle ||
            (foundPath.length > 0
              ? foundPath[foundPath.length - 1].label
              : undefined)
        );
      }
    }

    loadBreadcrumb();
  }, [pathname, params.slug, params.category, pageTitle]);

  if (!finalTitle) {
    return (
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      <h1 className="text-5xl font-bold text-white">{finalTitle}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="text-white font-medium text-lg hover:text-green-600"
              >
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white font-black text-xl" />

          {crumbs.map((crumb, idx) => (
            <BreadcrumbItem key={idx}>
              <BreadcrumbLink asChild>
                <Link
                  href={crumb.href ?? "/"}
                  className="text-white font-bold text-lg hover:text-green-600"
                >
                  {crumb.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
