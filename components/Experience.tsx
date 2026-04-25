"use client";

const experiences = [
  {
    title: "Software Engineer",
    company: "NAVEX Global",
    duration: "Aug 2025 - Present",
    location: "Bangalore, India",
    points: [
      "Contributed to enterprise compliance platforms within large shared production systems and structured SDLC release environments.",
      "Implemented controlled interface updates integrated with backend configuration-driven workflows.",
    ],
    stack: ["React", "Workflow Systems", "Configuration-driven UI", "Enterprise Platforms"],
  },
  {
    title: "Full-Stack Product Engineer",
    company: "Tic Tech Toe",
    duration: "Apr 2024 - May 2025",
    location: "Remote",
    points: [
      "Architected workflow-driven vendor onboarding and order lifecycle systems using Node.js and Python microservices.",
      "Designed deterministic state-machine flows, GST-compliant billing logic, and Zoho-integrated processing pipelines.",
      "Implemented Celery-based async jobs for invoice generation, payment polling, and WhatsApp Business notifications.",
      "Built AI-assisted learning products including React Native student experiences and a Next.js admin CMS.",
    ],
    stack: ["React", "Next.js", "Node.js", "Python", "Celery", "Zoho APIs", "State Machines"],
  },
  {
    title: "Software Engineer",
    company: "Nissan Digital India LLP",
    duration: "Sep 2022 - Feb 2024",
    location: "Trivandrum, India",
    points: [
      "Built vendor analytics dashboards backed by aggregation APIs and operational reporting pipelines.",
      "Developed backend services using Node.js and Python across relational and NoSQL data systems.",
      "Implemented Selenium and Cucumber automation frameworks improving regression stability of enterprise platforms.",
      "Collaborated within distributed Agile engineering teams using Git-based workflows.",
    ],
    stack: ["React", "Node.js", "Python", "Selenium", "Cucumber", "MongoDB", "SQL"],
  },
];

const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    place: "Surendra Institute of Engineering and Management",
    duration: "2018 - 2022",
  },
  {
    title: "Full Stack Development Bootcamp",
    place: "Geekster",
    duration: "2024",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl border-b border-line pb-16">
        <div className="mb-10">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Professional experience and education aligned with the latest resume.
          </h2>
        </div>

        <div className="grid gap-6">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="border border-line bg-surface p-6 md:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {item.duration}
                  </p>
                  <p className="text-sm text-muted">{item.location}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-line px-3 py-2 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-line bg-surface p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Education
            </p>
            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div key={item.title} className="grid gap-2 border-t border-line pt-5 first:border-t-0 first:pt-0 md:grid-cols-[160px_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    {item.duration}
                  </p>
                  <div>
                    <h3 className="text-base font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-line bg-surface p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Snapshot
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <p className="text-3xl font-semibold text-text">400+</p>
                <p className="mt-1 text-sm text-muted">DSA problems solved</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-text">3+</p>
                <p className="mt-1 text-sm text-muted">Years across software engineering roles</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-text">3</p>
                <p className="mt-1 text-sm text-muted">Core domains: SaaS, enterprise, workflow systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
