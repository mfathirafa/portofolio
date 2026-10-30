import type { T } from "./i18n";

export type Detail = {
  title: string;
  intro: T;
  meta: [T, T][];
  url: string;
  image: { src: string; width: number; height: number; alt: string };
  covers: T[];
  did: T[];
  next: { name: string; href: string };
};

export const labels = {
  projects: { en: "Projects", id: "Proyek" },
  status: { en: "Status", id: "Status" },
  live: { en: "Live", id: "Aktif" },
  openSite: { en: "Open site", id: "Buka situs" },
  covers: { en: "What the system covers", id: "Cakupan sistem" },
  did: { en: "What I did", id: "Yang saya kerjakan" },
  next: { en: "Next project", id: "Proyek berikutnya" },
};

export const details: Record<string, Detail> = {
  "siap-pro": {
    title: "SIAP-PRO",
    intro: {
      en: "A leadership agenda information system for the Protocol and Leadership Communication Division, Brebes Regency Secretariat. It tracks activities, speech status, and SPJ documents.",
      id: "Sistem informasi agenda pimpinan untuk Bagian Protokol dan Komunikasi Pimpinan, Sekretariat Daerah Kabupaten Brebes. Sistem ini mencatat kegiatan, status sambutan, dan dokumen SPJ.",
    },
    meta: [
      [{ en: "Client", id: "Klien" }, { en: "Brebes Regency Secretariat", id: "Sekretariat Kabupaten Brebes" }],
      [{ en: "Context", id: "Konteks" }, { en: "Internship", id: "Magang" }],
      [{ en: "Role", id: "Peran" }, { en: "Design and development", id: "Desain dan pengembangan" }],
      [{ en: "Stack", id: "Teknologi" }, { en: "Next.js", id: "Next.js" }],
    ],
    url: "https://siappro-app.vercel.app/",
    image: { src: "/projects/siappro.jpg", width: 1400, height: 786, alt: "SIAP-PRO dashboard" },
    covers: [
      { en: "Dashboard", id: "Dasbor" },
      { en: "Calendar", id: "Kalender" },
      { en: "Worksheet", id: "Worksheet" },
      { en: "Reports", id: "Laporan" },
      { en: "Officers", id: "Petugas" },
      { en: "Leading sector", id: "Leading sector" },
      { en: "User management", id: "Kelola pengguna" },
      { en: "Activity history", id: "Riwayat aktivitas" },
    ],
    did: [
      {
        en: "Designed the interface and built the application end to end during my internship.",
        id: "Merancang antarmuka dan membangun aplikasinya secara menyeluruh saat magang.",
      },
    ],
    next: { name: "SIMPB", href: "/projects/simpb" },
  },
  simpb: {
    title: "SIMPB",
    intro: {
      en: "Procurement management system for CV. Amrita Jayasri. It records incoming and outgoing goods, tracks stock in real time, manages supplier and customer data, and generates reports automatically.",
      id: "Sistem manajemen pengadaan untuk CV. Amrita Jayasri. Sistem ini mencatat barang masuk dan keluar, memantau stok secara real-time, mengelola data pemasok dan pelanggan, serta membuat laporan otomatis.",
    },
    meta: [
      [{ en: "Client", id: "Klien" }, { en: "CV. Amrita Jayasri", id: "CV. Amrita Jayasri" }],
      [{ en: "Year", id: "Tahun" }, { en: "2026", id: "2026" }],
      [{ en: "Role", id: "Peran" }, { en: "Backend Developer", id: "Backend Developer" }],
      [{ en: "Stack", id: "Teknologi" }, { en: "Laravel, PHP, Sanctum, MySQL", id: "Laravel, PHP, Sanctum, MySQL" }],
    ],
    url: "https://cv-amrita-jayasrii.vercel.app/",
    image: { src: "/projects/simpb.jpg", width: 1500, height: 516, alt: "SIMPB item data page" },
    covers: [
      { en: "Dashboard", id: "Dasbor" },
      { en: "Item data", id: "Data barang" },
      { en: "Suppliers", id: "Pemasok" },
      { en: "Customers", id: "Konsumen" },
      { en: "Incoming goods", id: "Barang masuk" },
      { en: "Outgoing goods", id: "Barang keluar" },
      { en: "Stock monitoring", id: "Monitoring stok" },
      { en: "Reports", id: "Laporan" },
    ],
    did: [
      { en: "Designed and built RESTful APIs for inventory, supplier, and stock transactions.", id: "Merancang dan membangun RESTful API untuk inventaris, pemasok, dan transaksi stok." },
      { en: "Secured the API endpoints with Sanctum authentication.", id: "Mengamankan endpoint API dengan autentikasi Sanctum." },
      { en: "Built automated stock tracking for inbound and outbound transactions.", id: "Membangun pelacakan stok otomatis untuk transaksi masuk dan keluar." },
      { en: "Designed the relational database schema and optimized table relationships.", id: "Merancang skema database relasional dan mengoptimalkan relasi antartabel." },
      { en: "Debugged and tested the application.", id: "Melakukan debugging dan pengujian aplikasi." },
    ],
    next: { name: "SIAP-PRO", href: "/projects/siap-pro" },
  },
};