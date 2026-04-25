"use client";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend and Data",
    items: ["Node.js", "Express.js", "Python", "REST APIs", "Authentication", "RBAC", "PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Architecture and Async Systems",
    items: ["Workflow Systems", "API Design", "State Machines", "Async Processing Pipelines", "Celery Workers", "Event-driven Processing", "Background Jobs"],
  },
  {
    title: "Tools and Concepts",
    items: ["Git", "Docker", "CI/CD", "Postman", "Selenium", "Cucumber", "System Design", "OOP", "Data Modeling", "Workflow Automation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl border-b border-line pb-16">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Tools and technologies I use to build reliable full-stack systems.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            Focused on product delivery across interfaces, backend services,
            automation pipelines, and scalable workflow design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="border border-line bg-surface p-6">
              <h3 className="text-lg font-semibold text-text">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line px-3 py-2 font-mono text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
