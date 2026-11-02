"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { labels, type Detail } from "@/lib/details";
import { useL } from "@/lib/i18n";

const heading = "font-[family-name:var(--font-heading)] tracking-tight";

export function ProjectView({ d }: { d: Detail }) {
  const L = useL();

  return (
    <main className="mx-auto max-w-6xl px-6">
      <p className="mb-5 mt-10 text-muted-foreground">
        <Link href="/#projects" className="hover:text-foreground">{L(labels.projects)}</Link> / {d.title}
      </p>
      <section className="grid items-end gap-10 pb-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <h1 className={`${heading} text-5xl font-bold md:text-6xl`}>{d.title}</h1>
          <p className="mt-6 max-w-[56ch] text-lg text-muted-foreground">{L(d.intro)}</p>
        </div>
        <div className="rounded-xl border bg-muted/40 p-6">
          <dl className="mb-5 grid grid-cols-[84px_1fr] gap-x-3 gap-y-2.5">
            {d.meta.map(([k, v]) => (
              <div key={k.en} className="contents">
                <dt className="text-muted-foreground">{L(k)}</dt>
                <dd>{L(v)}</dd>
              </div>
            ))}
            <dt className="text-muted-foreground">{L(labels.status)}</dt>
            <dd className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-600" />{L(labels.live)}</dd>
          </dl>
          <Button render={<a href={d.url} target="_blank" rel="noopener noreferrer" />}>{L(labels.openSite)}</Button>
        </div>
      </section>

      <div className="overflow-hidden rounded-xl border">
        <div className="flex h-10 items-center border-b bg-muted px-4 text-muted-foreground">
          {d.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
        <Image src={d.image.src} alt={d.image.alt} width={d.image.width} height={d.image.height} loading="eager" className="h-auto w-full" />
      </div>

      <section className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h2 className={`${heading} mb-5 text-3xl font-bold`}>{L(labels.covers)}</h2>
          <div className="grid grid-cols-2 gap-3">
            {d.covers.map((c) => <div key={c.en} className="rounded-lg border px-4 py-3.5">{L(c)}</div>)}
          </div>
        </div>
        <div>
          <h2 className={`${heading} mb-5 text-3xl font-bold`}>{L(labels.did)}</h2>
          <div className="border-b">
            {d.did.map((t) => <p key={t.en} className="border-t py-3">{L(t)}</p>)}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between border-t py-8 pb-16">
        <span className="text-muted-foreground">{L(labels.next)}</span>
        <Link href={d.next.href} className="font-medium underline decoration-2 underline-offset-4">{d.next.name}</Link>
      </div>
    </main>
  );
}