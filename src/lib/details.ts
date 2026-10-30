export type Detail = {
  title: string;
  intro: string;
  meta: [string, string][];
  url: string;
  image: { src: string; width: number; height: number; alt: string };
  covers: string[];
  did: string[];
  next: { name: string; href: string };
};

export const details: Record<string, Detail> = {
  "siap-pro": {
    title: "SIAP-PRO",
    intro: "A leadership agenda information system for the Protocol and Leadership Communication Division, Brebes Regency Secretariat. It tracks activities, speech status, and SPJ documents.",
    meta: [["Client", "Brebes Regency Secretariat"], ["Context", "Internship"], ["Role", "Design and development"], ["Stack", "Next.js"]],
    url: "https://siappro-app.vercel.app/",
    image: { src: "/projects/siappro.jpg", width: 1400, height: 786, alt: "SIAP-PRO dashboard" },
    covers: ["Dashboard", "Calendar", "Worksheet", "Reports", "Officers", "Leading sector", "User management", "Activity history"],
    did: ["Designed the interface and built the application end to end during my internship."],
    next: { name: "SIMPB", href: "/projects/simpb" },
  },
  simpb: {
    title: "SIMPB",
    intro: "Procurement management system for CV. Amrita Jayasri. It records incoming and outgoing goods, tracks stock in real time, manages supplier and customer data, and generates reports automatically.",
    meta: [["Client", "CV. Amrita Jayasri"], ["Year", "2026"], ["Role", "Backend Developer"], ["Stack", "Laravel, PHP, Sanctum, MySQL"]],
    url: "https://cv-amrita-jayasrii.vercel.app/",
    image: { src: "/projects/simpb.jpg", width: 1500, height: 516, alt: "SIMPB item data page" },
    covers: ["Dashboard", "Item data", "Suppliers", "Customers", "Incoming goods", "Outgoing goods", "Stock monitoring", "Reports"],
    did: [
      "Designed and built RESTful APIs for inventory, supplier, and stock transactions.",
      "Secured the API endpoints with Sanctum authentication.",
      "Built automated stock tracking for inbound and outbound transactions.",
      "Designed the relational database schema and optimized table relationships.",
      "Debugged and tested the application.",
    ],
    next: { name: "SIAP-PRO", href: "/projects/siap-pro" },
  },
};
