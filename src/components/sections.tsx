import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experience, featured, more, skills } from "@/lib/data";

const heading = "font-[family-name:var(--font-heading)] tracking-tight";
const link = "font-medium text-[#2438c9]";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Header() {
  return (
    <header className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6">
      <Link href="/" className="font-semibold">Muhammad Fathi Rafa</Link>
      <nav className="hidden gap-8 text-muted-foreground md:flex">
        {["projects", "experience", "skills", "contact"].map((id) => (
          <Link key={id} href={`/#${id}`} className="capitalize hover:text-foreground">{id}</Link>
        ))}
      </nav>
      <Button render={<a href="/cv-muhammad-fathi-rafa.pdf" download />}>Download CV</Button>
    </header>
  );
}

export function Hero() {
  const facts = [
    ["University", "Telkom University Purwokerto, GPA 3.84"],
    ["Graduating", "June 2027 (expected)"],
    ["Location", "Cilacap, Indonesia"],
    ["Languages", "Indonesian, English (passive)"],
  ];
  return (
    <section className="grid items-end gap-12 pb-6 pt-16 lg:grid-cols-[1.55fr_1fr] lg:gap-16 lg:pt-20">
      <div>
        <h1 className={`${heading} text-5xl font-bold leading-[1.05] md:text-6xl`}>
          I build the server side of systems people use every day.
        </h1>
        <p className="mt-7 max-w-[58ch] text-lg text-muted-foreground">
          Muhammad Fathi Rafa, a Software Engineering student at Telkom University Purwokerto. I design and build APIs, authentication, digital payments, and databases for administration systems, procurement tools, and websites.
        </p>
        <div className="mt-9 flex gap-3">
          <Button size="lg" render={<a href="#projects" />}>View Projects</Button>
          <Button size="lg" variant="outline" render={<a href="#contact" />}>Contact Me</Button>
        </div>
      </div>
      <div className="rounded-xl border bg-muted/40 p-6">
        <div className="flex items-center gap-4 border-b pb-5">
          <Image src="/photo.jpg" alt="Muhammad Fathi Rafa" width={88} height={110} className="h-[110px] w-[88px] rounded-lg object-cover object-top" />
          <div>
            <div className="text-lg font-semibold">Muhammad Fathi Rafa</div>
            <div className="text-muted-foreground">Software Engineer</div>
          </div>
        </div>
        <dl className="mt-5 grid grid-cols-[90px_1fr] gap-x-3 gap-y-2.5">
          {facts.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-muted-foreground">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Featured() {
  return (
    <section id="projects" className="scroll-mt-8 pt-20">
      <div className="mb-7 flex items-end justify-between">
        <h2 className={`${heading} text-4xl font-bold`}>Featured projects</h2>
        <span className="flex items-center gap-2 text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-600" />Live
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <Link key={p.name} href={p.slug ? `/projects/${p.slug}` : p.url} {...(p.slug ? {} : ext)} className="block overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md">
            <div className="relative h-52 border-b bg-muted">
              {p.image && (
                <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width: 768px) 360px, 100vw" className={`object-cover ${p.position ?? "object-top"}`} />
              )}
            </div>
            <div className="p-5">
              <div className={`${heading} text-xl font-semibold`}>{p.name}</div>
              <div className="mb-3 mt-1 text-muted-foreground">{p.context}</div>
              <p className="mb-4">{p.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
              </div>
              <div className={`${link} mt-3`}>View project</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function MoreProjects() {
  const cols = "md:grid-cols-[1.3fr_1.7fr_1fr_64px_64px]";
  return (
    <section className="pt-16">
      <h3 className={`${heading} mb-4 text-2xl font-semibold`}>More projects</h3>
      <div className={`hidden gap-6 py-2 text-sm text-muted-foreground md:grid ${cols}`}>
        <span>Project</span><span>Category</span><span>Tech</span><span>Year</span><span />
      </div>
      <div className="border-b">
        {more.map((p) => (
          <a key={p.name} href={p.url} {...ext} className={`grid gap-2 border-t py-4 md:items-center md:gap-6 ${cols}`}>
            <span className="flex flex-wrap items-center gap-2 font-semibold">
              {p.name}
              {p.tag && <Badge variant="info">{p.tag}</Badge>}
            </span>
            <span className="text-muted-foreground">{p.context}</span>
            <span className="flex flex-wrap gap-1.5">{p.tech.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}</span>
            <span className="text-muted-foreground">{p.year}</span>
            <span className={link}>Visit</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-8 pt-20">
      <h2 className={`${heading} mb-7 text-4xl font-bold`}>Experience</h2>
      <div className="border-b">
        {experience.map((e) => (
          <div key={e.title} className="grid gap-2 border-t py-5 md:grid-cols-[130px_1fr] md:gap-7">
            <div className={`${heading} text-3xl font-semibold`}>{e.year}</div>
            <div>
              <h3 className={`${heading} text-xl font-semibold`}>{e.title}</h3>
              <p className="mt-1.5 max-w-[68ch] text-muted-foreground">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-8 pt-20">
      <h2 className={`${heading} mb-7 text-4xl font-bold`}>Skills</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className={`${heading} mb-3.5 text-lg font-semibold`}>{s.group}</h3>
            <div className="flex flex-wrap gap-1.5">{s.items.map((i) => <Badge key={i} variant="outline">{i}</Badge>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 pb-20 pt-20">
      <div className="grid items-end gap-10 border-t border-foreground pt-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <h2 className={`${heading} text-4xl font-bold leading-[1.1] md:text-5xl`}>Have a system to build? Tell me what you need.</h2>
        <div>
          <Button size="lg" render={<a href="mailto:muhammad.fathi.rafa.id@gmail.com" />}>Email me</Button>
          <p className="mt-4 text-muted-foreground">
            muhammad.fathi.rafa.id@gmail.com<br />
            <a href="tel:+6281227076127">0812-2707-6127</a><br />
            <a href="https://www.linkedin.com/in/muhammad-fathi-rafa" {...ext}>linkedin.com/in/muhammad-fathi-rafa</a>
          </p>
        </div>
      </div>
    </section>
  );
}
