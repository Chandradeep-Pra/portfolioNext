"use client";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiFramer,
  SiWeb3Dotjs,
  SiGit,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Timeline from "./Timeline";

export default function About() {
  const Icons = {
    React: SiReact,
    TypeScript: SiTypescript,
    TailwindCSS: SiTailwindcss,
    Nextjs: SiNextdotjs,
    Firebase: SiFirebase,
    FramerMotion: SiFramer,
    Web3: SiWeb3Dotjs,
    Git: SiGit,
    vsCode:VscCode ,
  };

  const techIcons = [
    { name: "React", color: "text-cyan-400" },
    { name: "TypeScript", color: "text-blue-400" },
    { name: "TailwindCSS", color: "text-sky-400" },
    { name: "Nextjs", color: "text-gray-100" },
    { name: "Firebase", color: "text-yellow-400" },
    { name: "FramerMotion", color: "text-pink-400" },
    { name: "Web3", color: "text-purple-400" },
    { name: "Git", color: "text-orange-400" },
    { name: "vsCode", color: "text-blue-300" },
  ];
  // const bentoItems = [
  //   {
  //     title: "React + TypeScript",
  //     icon: <SiReact className="text-cyan-400 text-4xl" />,
  //     sub: "Reusable components & strong typings",
  //   },
  //   {
  //     title: "Tailwind + Next.js",
  //     icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
  //     sub: "Fast styling & SSR-ready apps",
  //   },
  //   {
  //     title: "Firebase & Framer Motion",
  //     icon: <SiFirebase className="text-yellow-400 text-4xl" />,
  //     sub: "Backend as a Service + animation magic",
  //   },
  //   {
  //     title: "Web3 & VSCode",
  //     icon: <SiWeb3Dotjs className="text-indigo-400 text-4xl" />,
  //     sub: "Blockchain dev + my daily toolset",
  //   },
  //   {
  //     title: "Design + Accessibility",
  //     icon: <span className="text-4xl">🎨</span>,
  //     sub: "Pixel precision + inclusive interfaces",
  //   },
  //   {
  //     title: "Always Learning",
  //     icon: <span className="text-4xl">🧠</span>,
  //     sub: "Staying curious, building better every day",
  //   },
  // ];

  // const timelineItems = [
  //   {
  //     year: "2022",
  //     title: "Graduated B.Tech (CSE)",
  //     desc: "Completed my engineering from SIEM, MAKAUT University.",
  //   },
  //   {
  //     year: "2022–2024",
  //     title: "Frontend Engineer – Nissan Digital",
  //     desc: "Built vendor portals and responsive UI systems using React, Node.js, and Git. Collaborated with QA using Selenium.",
  //   },
  //   {
  //     year: "2024 – Present",
  //     title: "Founder – Tic Tech Toe",
  //     desc: "Started freelancing in April 2024. Delivered web solutions, UI/UX upgrades, and built products for clients as a one-man tech team.",
  //   },
  //   {
  //     year: "2025",
  //     title: "Focused on AI, Web3 & Firebase",
  //     desc: "Now building AI-enhanced UI systems, experimenting with Web3, and setting up blazing-fast apps using Firebase.",
  //   },
  // ];

  return (
    <section
      id="about"
      className="relative z-10 py-24 px-6 md:px-20 max-w-7xl mx-auto text-text"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-16 text-center drop-shadow-[0_0_4px_var(--color-accent)]">
        About Me
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-10">
          {/* 👨‍💻 Dev Bio */}
          <div className="space-y-4 text-light text-base leading-relaxed">
            <p>
              I’m a frontend developer who’s obsessed with building interfaces
              that feel smooth, thoughtful, and alive.
            </p>
            <p>
              I started with a B.Tech in CSE, worked at Nissan Digital, then
              jumped into freelance life as the founder of{" "}
              <strong className="text-accent">Tic Tech Toe</strong> — delivering
              fast, purposeful web experiences to clients.
            </p>
          </div>

          {/* 🧾 Quick Summary */}
          <div className="bg-background/50 border border-accent/10 p-4 rounded-2xl backdrop-blur-md">
            <p className="text-sm text-primary">
              🔍 Currently exploring: AI-enhanced UIs, Firebase, and product
              design systems.
            </p>
            <p className="text-sm text-primary mt-2">
              ⚡ Actively looking for frontend opportunities.
            </p>
          </div>

          {/* 🕒 Timeline */}
        <Timeline />

        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {/* 🧩 Tech Stack Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
  {techIcons.map(({ name, color }, i) => {
    const IconComponent = Icons[name];
    return (
      <div
        key={i}
        className="group flex flex-col items-center justify-center p-3 rounded-xl bg-background/60 border border-accent/10 hover:scale-105 transition shadow-sm hover:shadow-accent/20 backdrop-blur-sm"
      >
        {IconComponent && <IconComponent className={`text-3xl ${color}`} />}
        <span className="text-xs text-light/80 mt-1 group-hover:text-accent transition">
          {name}
        </span>
      </div>
    );
  })}
</div>


          {/* 🌟 Highlights */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
  {[
    {
      title: "Built 20+ reusable components",
      emoji: "🧱",
    },
    {
      title: "Integrated AI into UIs",
      emoji: "🤖",
    },
    {
      title: "Worked with real clients",
      emoji: "🌍",
    },
    {
      title: "400+ DSA problems solved",
      emoji: "🧠",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="p-4 rounded-2xl bg-background/50 border border-accent/10 backdrop-blur-sm 
  transition-all duration-300 ease-in-out
  hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(127,90,240,0.15)]
  animate-fade-up delay-[200ms]"
    >
      <p className="text-lg font-semibold text-accent flex items-center gap-2">
        <span>{item.emoji}</span> {item.title}
      </p>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
