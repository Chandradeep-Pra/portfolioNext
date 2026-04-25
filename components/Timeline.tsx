"use client";

const timelineItems = [
  {
    year: "Aug 2025 - Present",
    title: "Software Engineer, NAVEX Global",
    desc: "Contributing to enterprise compliance platforms and backend-configured workflow systems.",
  },
  {
    year: "Apr 2024 - May 2025",
    title: "Full-Stack Product Engineer, Tic Tech Toe",
    desc: "Built workflow automation SaaS and AI-assisted learning systems for startup environments.",
  },
  {
    year: "Sep 2022 - Feb 2024",
    title: "Software Engineer, Nissan Digital India LLP",
    desc: "Built dashboards, backend services, and test automation across enterprise platforms.",
  },
  {
    year: "2022",
    title: "B.Tech in Computer Science and Engineering",
    desc: "Graduated from SIEM, MAKAUT University with a strong software foundation.",
  },
  {
    year: "2024",
    title: "Full Stack Development Bootcamp, Geekster",
    desc: "Deepened practical engineering skills across web development and problem solving.",
  },
];

export default function Timeline() {
  return (
    <div className="border border-line bg-surface p-6">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        Timeline
      </p>
      <div className="mt-6 space-y-6">
        {timelineItems.map((item) => (
          <div key={item.title} className="grid gap-2 border-t border-line pt-6 first:border-t-0 first:pt-0 md:grid-cols-[140px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {item.year}
            </p>
            <div>
              <h3 className="text-base font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
