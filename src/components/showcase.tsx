"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { featured } from "@/lib/data";
import { useL } from "@/lib/i18n";
import { ui } from "@/lib/ui";

const heading = "font-[family-name:var(--font-heading)] tracking-tight";

export function Showcase() {
  const L = useL();
  const [i, setI] = useState(0);
  const p = featured[i];
  const external = !p.slug;
  const href = p.slug ? `/projects/${p.slug}` : p.url;

  return (
    <section id="projects" className="scroll-mt-8">
      <div className="overflow-hidden rounded-[14px] border border-[#c9d0e6] bg-card shadow-[0_40px_80px_-30px_rgba(20,25,58,0.45)]">
        <div role="tablist" aria-label="Projects" className="flex gap-1 overflow-x-auto bg-[#dfe4f3] px-3 pt-2.5">
          {featured.map((f, n) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              id={`tab-${n}`}
              aria-selected={n === i}
              aria-controls="showcase-panel"
              onClick={() => setI(n)}
              className={`shrink-0 rounded-t-[10px] px-4 py-2 text-sm ${
                n === i
                  ? "border-t-[3px] border-[#f2b01e] bg-card font-semibold text-foreground"
                  : "text-[#3b4270] hover:text-foreground"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
        <div className="border-b border-[#e3e7f4] px-4 py-2.5 text-sm text-muted-foreground">
          {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
        <div id="showcase-panel" role="tabpanel" aria-labelledby={`tab-${i}`} className="relative h-[320px] md:h-[580px]">
          {p.image && (
            <Image
              key={p.image}
              src={p.image}
              alt={`${p.name} screenshot`}
              fill
              sizes="(min-width: 1200px) 1120px, 100vw"
              loading="eager"
              className={`object-cover ${p.position ?? "object-top"}`}
            />
          )}
        </div>
      </div>

      <div className="grid gap-6 pb-20 pt-9 md:grid-cols-[1fr_1.4fr_1fr] md:gap-12">
        <h2 className={`${heading} text-4xl font-bold`}>{p.name}</h2>
        <p>{p.blurb && L(p.blurb)}</p>
        <div>
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
          </div>
          <Link
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-medium underline decoration-2 underline-offset-4"
          >
            {external ? L(ui.visit) : L(ui.viewProject)}
          </Link>
        </div>
      </div>
    </section>
  );
}