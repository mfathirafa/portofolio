import type { T } from "./i18n";

export const ui = {
  nav: [
    { id: "projects", label: { en: "Projects", id: "Proyek" } },
    { id: "experience", label: { en: "Experience", id: "Pengalaman" } },
    { id: "skills", label: { en: "Skills", id: "Keahlian" } },
    { id: "contact", label: { en: "Contact", id: "Kontak" } },
  ] as { id: string; label: T }[],
  downloadCv: { en: "Download CV", id: "Unduh CV" },
  heroTitle: { en: "I build the server side of systems people use every day.", id: "Saya membangun sisi server dari sistem yang dipakai sehari-hari." },
  heroText: {
    en: "Muhammad Fathi Rafa, a Software Engineering student at Telkom University Purwokerto. I design and build APIs, authentication, digital payments, and databases for administration systems, procurement tools, and websites.",
    id: "Muhammad Fathi Rafa, mahasiswa Rekayasa Perangkat Lunak di Telkom University Purwokerto. Saya merancang dan membangun API, autentikasi, pembayaran digital, dan database untuk sistem administrasi, sistem pengadaan, dan situs web.",
  },
  viewProjects: { en: "View Projects", id: "Lihat Proyek" },
  contactMe: { en: "Contact Me", id: "Hubungi Saya" },
  facts: [
    [{ en: "University", id: "Kampus" }, { en: "Telkom University Purwokerto, GPA 3.84", id: "Telkom University Purwokerto, GPA 3.84" }],
    [{ en: "Graduating", id: "Lulus" }, { en: "June 2027 (expected)", id: "Juni 2027 (target)" }],
    [{ en: "Location", id: "Lokasi" }, { en: "Cilacap, Indonesia", id: "Cilacap, Indonesia" }],
    [{ en: "Languages", id: "Bahasa" }, { en: "Indonesian, English (passive)", id: "Indonesia, Inggris (pasif)" }],
  ] as [T, T][],
  featured: { en: "Featured projects", id: "Proyek unggulan" },
  live: { en: "Live", id: "Aktif" },
  viewProject: { en: "View project", id: "Lihat proyek" },
  more: { en: "More projects", id: "Proyek lainnya" },
  cols: [
    { en: "Project", id: "Proyek" },
    { en: "Category", id: "Kategori" },
    { en: "Tech", id: "Teknologi" },
    { en: "Year", id: "Tahun" },
  ] as T[],
  visit: { en: "Visit", id: "Buka" },
  experience: { en: "Experience", id: "Pengalaman" },
  skills: { en: "Skills", id: "Keahlian" },
  contactTitle: { en: "Have a system to build? Tell me what you need.", id: "Punya sistem yang perlu dibangun? Ceritakan kebutuhannya." },
  emailMe: { en: "Email me", id: "Kirim email" },
};