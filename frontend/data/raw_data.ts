export const all_blog_data = [
  ...Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    image: i % 2 === 0 ? "/cargo_ship.jpg" : "/cargo_ship_container.jpg",
    date: `March ${(i % 3) + 1}, 2023`,
    title: ` Activity ${i + 1}`,
    category: "Activity",
  })),
  ...Array.from({ length: 25 }, (_, i) => ({
    id: i + 26,
    image: i % 2 === 0 ? "/cargo_ship.jpg" : "/cargo_ship_container.jpg",
    date: `March ${(i % 3) + 1}, 2023`,
    title: `Logistics News ${i + 1}`,
    category: "Logistics Market",
  })),
  ...Array.from({ length: 25 }, (_, i) => ({
    id: i + 51,
    image: i % 2 === 0 ? "/cargo_ship.jpg" : "/cargo_ship_container.jpg",
    date: `March ${(i % 3) + 1}, 2023`,
    title: `Partner ${i + 1}`,
    category: "Corporate Partner",
  })),
  ...Array.from({ length: 25 }, (_, i) => ({
    id: i + 76,
    image: i % 2 === 0 ? "/cargo_ship.jpg" : "/cargo_ship_container.jpg",
    date: `March ${(i % 3) + 1}, 2023`,
    title: `Knowledge Logistics ${i + 1}`,
    category: "Logistics Knowledge",
  })),
];
