import type { T } from "./i18n";

export type Project = {
  slug?: string;
  name: string;
  context: T;
  blurb?: T;
  tech: string[];
  year: string;
  url: string;
  image?: string;
  position?: string;
  tag?: T;
};

export const featured: Project[] = [
  {
    slug: "siap-pro", name: "SIAP-PRO",
    context: { en: "Internal system, Brebes Regency Secretariat", id: "Sistem internal, Sekretariat Kabupaten Brebes" },
    blurb: { en: "Tracks leadership agendas, speech status, and SPJ documents. Built during my internship.", id: "Mencatat agenda pimpinan, status sambutan, dan dokumen SPJ. Dibuat saat magang." },
    tech: ["Next.js"], year: "2026", url: "https://siappro-app.vercel.app/", image: "/projects/siappro.jpg",
  },
  {
    name: "Warma Heritage Group",
    context: { en: "Company website, Denpasar", id: "Situs perusahaan, Denpasar" },
    blurb: { en: "Bilingual website for a heritage holding company and its six businesses.", id: "Situs dua bahasa untuk holding company warisan budaya dan enam unit usahanya." },
    tech: ["Next.js"], year: "2026", url: "https://warmaheritagegroup.com", image: "/projects/warma.jpg",
  },
  {
    slug: "simpb", name: "SIMPB",
    context: { en: "Procurement system, CV. Amrita Jayasri", id: "Sistem pengadaan, CV. Amrita Jayasri" },
    blurb: { en: "Records incoming and outgoing goods, tracks stock in real time, and generates reports automatically.", id: "Mencatat barang masuk dan keluar, memantau stok secara real-time, dan membuat laporan otomatis." },
    tech: ["Laravel", "Sanctum", "MySQL"], year: "2026", url: "https://cv-amrita-jayasrii.vercel.app/", image: "/projects/simpb.jpg", position: "object-left-top",
  },
];

export const more: Project[] = [
  { name: "TepatWaktu", context: { en: "Bill reminder app, startup course project", id: "Aplikasi pengingat tagihan, proyek mata kuliah startup" }, tech: ["JavaScript"], year: "2026", url: "https://www.tepatwaktu.my.id/" },
  { name: "Prokompim Brebes", context: { en: "Government website, internship", id: "Situs pemerintah, magang" }, tech: ["Next.js"], year: "2026", url: "https://prokompim-brebeskab.vercel.app/" },
  { name: "Bali Menari Academy", context: { en: "Business website, part of Warma Heritage Group", id: "Situs usaha, bagian dari Warma Heritage Group" }, tech: ["Next.js"], year: "2026", url: "https://bali-menari-academy.vercel.app/", tag: { en: "Just started", id: "Baru dimulai" } },
];

export const experience: { year: string; title: T; text: T }[] = [
  { year: "2024", title: { en: "LMS Gabara Education", id: "LMS Gabara Education" }, text: { en: "Backend Developer. RESTful APIs for LMS features, including user management and course modules.", id: "Backend Developer. RESTful API untuk fitur LMS, termasuk manajemen pengguna dan modul kursus." } },
  { year: "2025", title: { en: "KSM Tanjung Administration System", id: "Sistem Administrasi KSM Tanjung" }, text: { en: "Backend Developer. Financial transactions, automated income and expense tracking, WhatsApp billing notifications, and QRIS, e-wallet, and bank transfer payments.", id: "Backend Developer. Transaksi keuangan, pencatatan pemasukan dan pengeluaran otomatis, notifikasi tagihan lewat WhatsApp API, serta pembayaran QRIS, e-wallet, dan transfer bank." } },
  { year: "2026", title: { en: "SIMPB, CV. Amrita Jayasri", id: "SIMPB, CV. Amrita Jayasri" }, text: { en: "Backend Developer. APIs for inventory, suppliers, and stock, Sanctum authentication, and a relational database schema.", id: "Backend Developer. API inventaris, pemasok, dan stok, autentikasi Sanctum, serta skema database relasional." } },
  { year: "2026", title: { en: "Internship, Brebes Regency Secretariat", id: "Magang, Sekretariat Kabupaten Brebes" }, text: { en: "Designed and built SIAP-PRO and the Prokompim website.", id: "Merancang dan membangun SIAP-PRO dan situs Prokompim." } },
];

export const skills: { group: T; items: string[] }[] = [
  { group: { en: "Backend and data", id: "Backend dan data" }, items: ["Laravel", "PHP", "Node.js", "Express.js", "MySQL"] },
  { group: { en: "API and security", id: "API dan keamanan" }, items: ["RESTful API", "JWT", "Sanctum"] },
  { group: { en: "Integrations", id: "Integrasi" }, items: ["WhatsApp API", "Payment gateway"] },
  { group: { en: "Tools", id: "Alat kerja" }, items: ["Git", "GitHub", "Postman", "Jira"] },
];