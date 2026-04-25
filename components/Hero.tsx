"use client";

export default function Hero() {
  return (
    <section id="hero" className="px-6 pb-20 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-12 border-b border-line pb-16 lg:grid-cols-[1.6fr_0.9fr]">
        <div className="space-y-8">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Full-Stack Engineer
          </p>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-text sm:text-6xl md:text-7xl">
              Chandradeep Prasad
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Full-stack engineer building workflow-driven SaaS platforms,
              backend-integrated dashboards, and automation systems with React,
              Node.js, and Python.
            </p>
          </div>

          <div className="grid gap-4 border-l-2 border-accent pl-5 text-sm leading-7 text-muted sm:grid-cols-2 sm:gap-8">
            <p>
              Experience across enterprise systems, startup products, async
              workflows, and API-driven platforms used in production.
            </p>
            <p>
              Strong with state-machine workflows, role-based access systems,
              and practical product delivery from frontend through backend.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:chandradeepp611@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65c00]"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-text px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              View Projects
            </a>
            <a
              href="https://linkedin.com/in/chandradeepprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-line px-6 py-3 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="flex flex-col justify-between border border-line bg-surface p-6">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Summary
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Full-stack background spanning enterprise compliance systems,
                workflow automation, backend services, and product-facing UI.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="border-t border-line pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Based In
                </p>
                <p className="mt-1 text-text">Bangalore, India</p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Focus
                </p>
                <p className="mt-1 text-text">
                  React, Node.js, Python, Workflow Systems
                </p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Status
                </p>
                <p className="mt-1 text-text">
                  Software Engineer at NAVEX Global
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
