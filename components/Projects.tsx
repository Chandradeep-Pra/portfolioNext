"use client";

import Image from "next/image";
import { useState } from "react";
import { BiChevronDown, BiLinkExternal, BiLogoGithub } from "react-icons/bi";

const projects = [
  {
    id: 1,
    title: "Shiptrack",
    category: "Full Stack",
    description: "Workflow automation SaaS for vendor onboarding, order lifecycle, billing, and notifications.",
    longDescription:
      "Architected a workflow-driven vendor onboarding and order lifecycle platform using Node.js and Python microservices. Built deterministic state-machine transitions, GST-compliant billing logic, Zoho API integrations, and Celery-powered async processing for invoices, payment polling, and WhatsApp Business notifications.",
    tech: ["Next.js", "Node.js", "Python", "Celery", "Zoho APIs", "WhatsApp Business API", "State Machines"],
    image: "/projects/Shiptrack.PNG",
    github: "https://github.com/Tic-Tech-Toe/oms",
    live: "https://oms-delta.vercel.app/",
  },
  {
    id: 2,
    title: "Urologics",
    category: "Full Stack",
    description: "AI-assisted learning platform with student-facing workflows and a publishing CMS.",
    longDescription:
      "Developed a React Native student application and a Next.js admin CMS with backend-driven content configuration, dynamic publishing workflows, analytics tracking, progress monitoring, subscription access control, and AI mock-viva workflow support.",
    tech: ["React Native", "Next.js", "Node.js", "Analytics", "Access Control", "AI Workflows"],
    image: "",
    github: "",
    live: "",
  },
  {
    id: 3,
    title: "Tasktrack",
    category: "Full Stack",
    description: "AI-assisted project management workflow from meeting notes to task assignment.",
    longDescription:
      "Built a full-stack product that turns meeting transcription into PRDs, task breakdowns, assignments, Jira tickets, and employee notifications with AI assistance throughout the workflow.",
    tech: ["Next.js", "TypeScript", "Gemini", "Jira API"],
    image: "/projects/Tasktrack.PNG",
    github: "https://github.com/Chandradeep-Pra/task-train",
    live: "https://task-train.vercel.app/",
  },
  {
    id: 4,
    title: "Immersive Weather App",
    category: "Frontend",
    description: "Weather app that translates forecast data into scene-based visual feedback.",
    longDescription:
      "Created a weather experience with tailored scenes for rain, thunder, clouds, snow, time of day, and wind conditions so the interface mirrors the real-world forecast more vividly.",
    tech: ["React", "JavaScript", "OpenWeatherMap API", "CSS3", "Framer Motion"],
    image: "/projects/Weather.PNG",
    github: "https://github.com/Chandradeep-Pra/weather-app",
    live: "#",
  },
];

const categories = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl border-b border-line pb-16">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Selected work that reflects product thinking, workflow design, and full-stack execution.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-surface text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden border border-line bg-surface"
            >
              {project.image ? (
                <div className="relative h-56 border-b border-line">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-56 items-center justify-center border-b border-line bg-background px-6 text-center">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      Case Study
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Project visuals and public links can be added here when available.
                    </p>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-text">
                      {project.title}
                    </h3>
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-sm border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                          aria-label={`${project.title} GitHub`}
                        >
                          <BiLogoGithub size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-sm border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                          aria-label={`${project.title} live link`}
                        >
                          <BiLinkExternal size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {expandedProject === project.id
                    ? project.longDescription
                    : project.description}
                </p>

                <button
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )
                  }
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent"
                >
                  {expandedProject === project.id ? "Show less" : "Read more"}
                  <BiChevronDown
                    size={16}
                    className={
                      expandedProject === project.id ? "rotate-180" : ""
                    }
                  />
                </button>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-line px-3 py-2 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
