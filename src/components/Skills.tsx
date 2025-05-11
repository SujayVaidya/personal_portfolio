import { skills } from "@/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16">
      {/* Aligns with header width (from site name to theme-toggle) */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.src}
                alt={skill.name}
                title={skill.name}
                className="h-12 w-12 object-contain"
              />
              <span className="mt-2 text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
