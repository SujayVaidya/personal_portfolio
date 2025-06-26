import { useEffect, useState } from "react";
import Header from "./components/Header";
import { CONTACT_URLS, experience, projects } from "./data";
import { ExperienceItem } from "./components/ExperienceItem";
import { ProjectCard } from "./components/ProjectCard";
import { Button } from "./components/ui/button";
import Hero from "./components/Hero";
import SkillsSection from "./components/Skills";
import Footer from "./components/Footer";
// import { BackgroundBeams } from "./components/ui/background-beams";

const SECTION_IDS = ["home", "skills", "experience", "projects"] as const;
type SectionID = (typeof SECTION_IDS)[number];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionID>("home");

  // 1) smooth‐scroll + immediate highlight on click
  const scrollTo = (id: SectionID) => {
    setActiveSection(id);
    document
      .getElementById(id)!
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 2) intersection observer for scroll‐spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionID);
            break;
          }
        }
      },
      {
        // fire when section crosses the middle of viewport
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Header active={activeSection} onNavClick={scrollTo} />

      <main className=" flex-1 px-6 md:px-20 lg:px-40 py-10 md:py-3 space-y-2">
        <section id="home" className="scroll-mt-2">
          <Hero />
        </section>
        <section id="skills" className="scroll-mt-20">
          <SkillsSection />
        </section>

        <section id="experience" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          {experience.map((e) => (
            <ExperienceItem key={e.title + e.company} {...e} />
          ))}
        </section>

        <section id="projects" className="scroll-mt-20 mt-20">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <a href={CONTACT_URLS.github} target="_parent">
                {/* className="mr-2 h-4 w-4" */}
                View More
              </a>
            </Button>
          </div>
        </section>

        <section id="footer" className="scroll-mt-20">
          <Footer />
        </section>
      </main>
      {/* <BackgroundBeams /> */}
    </div>
  );
}
