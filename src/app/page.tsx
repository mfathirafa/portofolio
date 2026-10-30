import { Contact, Experience, Featured, Header, Hero, MoreProjects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Featured />
        <MoreProjects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
