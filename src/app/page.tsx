import { Contact, Experience, Header, Hero, MoreProjects, Skills } from "@/components/sections";
import { Showcase } from "@/components/showcase";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Showcase />
        <MoreProjects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}