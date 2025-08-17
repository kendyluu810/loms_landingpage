// menu-data.ts
export const menuItems = [
  {
    label: "About us",
    href: "/about-us/overview",
    children: [
      { label: "Overview", href: "/about-us/overview" },
      {
        label: "Vision - Spirit - Core Values",
        href: "/about-us/vision-spirit-core-values",
      },
      { label: "Company Activities", href: "/about-us/company-activities" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Ocean Freight", href: "/services/ocean-freight" },
      { label: "Air Freight", href: "/services/air-freight" },
      { label: "Land Transportation", href: "/services/land-transport" },
      { label: "Support Services", href: "/services/support" },
    ],
  },
  {
    label: "Schedules",
    children: [
      {
        label: "Ocean Freight Schedules",
        href: "/schedules/ocean-freight-schedule",
      },
      {
        label: "Air Freight Schedules",
        href: "/schedules/air-freight-schedule",
      },
      {
        label: "Land Transportation Schedules",
        href: "/schedules/land-transport-schedule",
      },
    ],
  },
  { label: "News", href: "/news" },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Support", href: "/contact/support" },
      { label: "Recruitment", href: "/contact/recruitment" },
    ],
  },
  { label: "Tracking", href: "/tracking" },
];
