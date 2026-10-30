import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/sections";
import { details } from "@/lib/details";
import { ProjectBody } from "./project-body";

export function generateStaticParams() {
  return Object.keys(details).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = details[slug];
  return d ? { title: `${d.title} | Muhammad Fathi Rafa`, description: d.intro.en } : {};
}

function ProjectSkeleton() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <div className="mb-5 mt-10 h-6 w-48 animate-pulse rounded bg-muted" />
      <div className="h-16 w-72 animate-pulse rounded-lg bg-muted" />
      <div className="mt-10 aspect-[16/9] w-full animate-pulse rounded-xl bg-muted" />
    </main>
  );
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <>
      <Header />
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectBody params={params} />
      </Suspense>
    </>
  );
}