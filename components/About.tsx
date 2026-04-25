"use client";

import Timeline from "./Timeline";

const highlights = [
  "Built enterprise and startup systems across frontend, backend, and automation layers",
  "Strong with React, Next.js, Node.js, Python, and API-driven architectures",
  "Experience with workflow systems, async processing, and role-based access control",
  "400+ DSA problems solved with a practical engineering mindset",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl border-b border-line pb-16">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              A full-stack engineer focused on workflow systems and dependable product delivery.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              I build systems that combine solid product interfaces with
              backend workflows, automation pipelines, and API-driven
              architecture. My work spans enterprise platforms, dashboards,
              internal tools, and startup products.
            </p>
            <p>
              After graduating in computer science, I worked at Nissan Digital,
              built products at Tic Tech Toe, and now contribute to enterprise
              compliance platforms at NAVEX Global. That path strengthened both
              my engineering depth and my ability to ship across the stack.
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Timeline />

          <div className="border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Highlights
            </p>
            <ul className="mt-5 space-y-4">
              {highlights.map((item, index) => (
                <li key={item} className="border-t border-line pt-4 text-sm leading-7 text-muted first:border-t-0 first:pt-0">
                  <span className="mr-3 text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
