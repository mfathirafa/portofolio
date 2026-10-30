export type Project = {
  slug?: string;
  name: string;
  context: string;
  blurb: string;
  tech: string[];
  year: string;
  url: string;
  image?: string;
  position?: string;
  tag?: string;
};

export const featured: Project[] = [
  { slug: "siap-pro", name: "SIAP-PRO", context: "Internal system, Brebes Regency Secretariat", blurb: "Tracks leadership agendas, speech status, and SPJ documents. Built during my internship.", tech: ["Next.js"], year: "2026", url: "https://siappro-app.vercel.app/", image: "/projects/siappro.jpg" },
  { name: "Warma Heritage Group", context: "Company website, Denpasar", blurb: "Bilingual website for a heritage holding company and its six businesses.", tech: ["Next.js"], year: "2026", url: "https://warmaheritagegroup.com", image: "/projects/warma.jpg" },
  { slug: "simpb", name: "SIMPB", context: "Procurement system, CV. Amrita Jayasri", blurb: "Records incoming and outgoing goods, tracks stock in real time, and generates reports automatically.", tech: ["Laravel", "Sanctum", "MySQL"], year: "2026", url: "https://cv-amrita-jayasrii.vercel.app/", image: "/projects/simpb.jpg", position: "object-left-top" },
];

export const more: Project[] = [
  { name: "TepatWaktu", context: "Bill reminder app, startup course project", blurb: "", tech: ["JavaScript"], year: "2026", url: "https://www.tepatwaktu.my.id/" },
  { name: "Prokompim Brebes", context: "Government website, internship", blurb: "", tech: ["Next.js"], year: "2026", url: "https://prokompim-brebeskab.vercel.app/" },
  { name: "Bali Menari Academy", context: "Business website, part of Warma Heritage Group", blurb: "", tech: ["Next.js"], year: "2026", url: "https://bali-menari-academy.vercel.app/", tag: "Just started" },
];

export const experience = [
  { year: "2024", title: "LMS Gabara Education", text: "Backend Developer. RESTful APIs for LMS features, including user management and course modules." },
  { year: "2025", title: "KSM Tanjung Administration System", text: "Backend Developer. Financial transactions, automated income and expense tracking, WhatsApp billing notifications, and QRIS, e-wallet, and bank transfer payments." },
  { year: "2026", title: "SIMPB, CV. Amrita Jayasri", text: "Backend Developer. APIs for inventory, suppliers, and stock, Sanctum authentication, and a relational database schema." },
  { year: "2026", title: "Internship, Brebes Regency Secretariat", text: "Designed and built SIAP-PRO and the Prokompim website." },
];

export const skills = [
  { group: "Backend and data", items: ["Laravel", "PHP", "Node.js", "Express.js", "MySQL"] },
  { group: "API and security", items: ["RESTful API", "JWT", "Sanctum"] },
  { group: "Integrations", items: ["WhatsApp API", "Payment gateway"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "Jira"] },
];
