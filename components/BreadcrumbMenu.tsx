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

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
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
  | ((id: string) => {
      title: string;
      crumbs: { label: string; href: string }[];
    })
> = {
  "/about-us/vision-spirit-core-values": {
    title: "Vision - Spirit - Core Values",
    crumbs: [{ label: "About us", href: "/about-us/overview" }],
  },
  "/about-us/company-activities": {
    title: "Company Activities",
    crumbs: [{ label: "About us", href: "/about-us/overview" }],
  },
  "/about-us/company-activities/[id]": (id: string) => {
    const activity = all_blog_data.find(
      (a) => a.category === "Activity" && a.id === Number(id)
    );
    return {
      title: "Activity",
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

  "/news/[id]": (id: string) => {
    const news = all_blog_data.find((a) => a.id === Number(id));
    const categoryName = news?.category || "News";
    return {
      title: categoryName,
      crumbs: [{ label: "News", href: "/news" }],
    };
  },

  "/news/category/[category]": (category: string) => {
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
  const params = useParams<{ id?: string; category?: string }>();

  const keys = Object.keys(breadcrumbOverrides);

  // Sắp xếp key để key dynamic (có [id]) được check trước
  keys.sort((a, b) => {
    const aDynamic = a.includes("[");
    const bDynamic = b.includes("[");
    return aDynamic === bDynamic ? 0 : aDynamic ? -1 : 1;
  });

  const overrideKey = keys.find((key) => {
    if (key.includes("[id]") && params.id) {
      const basePath = key.replace("/[id]", "");
      return pathname.startsWith(basePath + "/");
    }
    if (key.includes("[category]") && params.category) {
      const basePath = key.replace("/[category]", "");
      return pathname.startsWith(basePath + "/");
    }
    return pathname === key || pathname.startsWith(key + "/");
  });

  let crumbs: MenuItem[] | { label: string; href: string }[] = [];
  let finalTitle: string | undefined;

  if (overrideKey) {
    const override = breadcrumbOverrides[overrideKey];

    if (typeof override === "function") {
      if (params.id) {
        const result = override(params.id);
        crumbs = result.crumbs;
        finalTitle = result.title;
      } else if (params.category) {
        const result = override(params.category);
        crumbs = result.crumbs;
        finalTitle = result.title;
      }
    } else {
      crumbs = override.crumbs;
      finalTitle = override.title;
    }
  }

  if (!overrideKey) {
    crumbs = findBreadcrumbPath(pathname, menuItems);
  }

  if (!finalTitle) {
    finalTitle = pageTitle || crumbs[crumbs.length - 1]?.label;
  }

  if (!finalTitle) return null;

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
