import { notFound } from "next/navigation";
import { details } from "@/lib/details";
import { ProjectView } from "./project-view";

export async function ProjectBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = details[slug];
  if (!d) notFound();
  return <ProjectView d={d} />;
}