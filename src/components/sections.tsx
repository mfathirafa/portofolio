"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experience, featured, more, skills } from "@/lib/data";
import { useL, useLang } from "@/lib/i18n";
import { ui } from "@/lib/ui";
import { Logo } from "@/components/logo";

const heading = "font-[family-name:var(--font-heading)] tracking-tight";
const link = "font-medium underline decoration-2 underline-offset-4";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Header() {
  const { lang, setLang } = useLang();
  const L = useL();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <header className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-6">
      <Link href="/" className="flex items-center gap-3 font-semibold">
        <Logo />
        <span className="hidden sm:inline">Muhammad Fathi Rafa</span>
      </Link>
      <nav className="hidden gap-8 text-muted-foreground md:flex">
        {ui.nav.map((n) => (
          <Link key={n.id} href={`/#${n.id}`} className="hover:text-foreground">{L(n.label)}</Link>
        ))}
      </nav>
      <div className="flex items-center gap-2.5">
        <div role="group" aria-label="Language" className="inline-flex h-9 overflow-hidden rounded-lg border">
          {(["id", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              className={`px-3 text-sm font-medium ${lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <Button className="hidden sm:inline-flex" render={<a href="/cv-muhammad-fathi-rafa.pdf" download />}>
          {L(ui.downloadCv)}
        </Button>
      </div>
    </header>
  );
}

export function Hero() {
  const L = useL();
  return (
    <section className="grid items-end gap-12 pb-14 pt-12 lg:grid-cols-[1fr_230px] lg:gap-16">
      <div>
        <h1 className={`${heading} text-5xl font-bold leading-[1.02] md:text-7xl`}>{L(ui.heroTitle)}</h1>
        <p className="mt-7 max-w-[60ch] text-lg text-muted-foreground">{L(ui.heroText)}</p>
      </div>
      <Image
        src="/photo.jpg"
        alt="Muhammad Fathi Rafa"
        width={230}
        height={290}
        className="h-[290px] w-[230px] rounded-2xl object-cover object-top shadow-[14px_14px_0_#f2b01e]"
      />
    </section>
  );
}

export function Featured() {
  const L = useL();
  return (
    <section id="projects" className="scroll-mt-8 pt-20">
      <div className="mb-7 flex items-end justify-between">
        <h2 className={`${heading} text-4xl font-bold`}>{L(ui.featured)}</h2>
        <span className="flex items-center gap-2 text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-600" />{L(ui.live)}
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
              <div className="mb-3 mt-1 text-muted-foreground">{L(p.context)}</div>
              <p className="mb-4">{p.blurb && L(p.blurb)}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
              </div>
              <div className={`${link} mt-3`}>{L(ui.viewProject)}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function MoreProjects() {
  const L = useL();
  const cols = "md:grid-cols-[1.3fr_1.7fr_1fr_64px_64px]";
  return (
    <section className="pt-16">
      <h3 className={`${heading} mb-4 text-2xl font-semibold`}>{L(ui.more)}</h3>
      <div className={`hidden gap-6 py-2 text-sm text-muted-foreground md:grid ${cols}`}>
        {ui.cols.map((c) => <span key={c.en}>{L(c)}</span>)}
        <span />
      </div>
      <div className="border-b">
        {more.map((p) => (
          <a key={p.name} href={p.url} {...ext} className={`grid gap-2 border-t py-4 md:items-center md:gap-6 ${cols}`}>
            <span className="flex flex-wrap items-center gap-2 font-semibold">
              {p.name}
              {p.tag && <Badge variant="info">{L(p.tag)}</Badge>}
            </span>
            <span className="text-muted-foreground">{L(p.context)}</span>
            <span className="flex flex-wrap gap-1.5">{p.tech.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}</span>
            <span className="text-muted-foreground">{p.year}</span>
            <span className={link}>{L(ui.visit)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const L = useL();
  return (
    <section id="experience" className="scroll-mt-8 pt-20">
      <h2 className={`${heading} mb-7 text-4xl font-bold`}>{L(ui.experience)}</h2>
      <div className="border-b">
        {experience.map((e) => (
          <div key={e.year + e.title.en} className="grid gap-2 border-t py-5 md:grid-cols-[130px_1fr] md:gap-7">
            <div className={`${heading} text-3xl font-semibold`}>{e.year}</div>
            <div>
              <h3 className={`${heading} text-xl font-semibold`}>{L(e.title)}</h3>
              <p className="mt-1.5 max-w-[68ch] text-muted-foreground">{L(e.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const L = useL();
  return (
    <section id="skills" className="scroll-mt-8 pt-20">
      <h2 className={`${heading} mb-7 text-4xl font-bold`}>{L(ui.skills)}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.group.en}>
            <h3 className={`${heading} mb-3.5 text-lg font-semibold`}>{L(s.group)}</h3>
            <div className="flex flex-wrap gap-1.5">{s.items.map((i) => <Badge key={i} variant="outline">{i}</Badge>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const L = useL();
  return (
    <section id="contact" className="scroll-mt-8 pb-20 pt-20">
      <div className="grid items-end gap-10 border-t border-foreground pt-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <h2 className={`${heading} text-4xl font-bold leading-[1.1] md:text-5xl`}>{L(ui.contactTitle)}</h2>
        <div>
          <Button size="lg" render={<a href="mailto:muhammad.fathi.rafa.id@gmail.com" />}>{L(ui.emailMe)}</Button>
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