"use client";
import { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";


const timelineItems = [
    {
      year: "2022",
      title: "Graduated B.Tech (CSE)",
      icon: "🎓",
      desc: "From SIEM, MAKAUT University.",
      details:
        "Completed my degree in Computer Science and Engineering. Built a strong foundation in programming, OOP, DBMS, and problem-solving.",
    },
    {
      year: "2022–2024",
      title: "Frontend Engineer @ Nissan Digital",
      icon: "💼",
      desc: "Built vendor portals, worked with React, Node, Selenium & Git.",
      details:
        "Worked on large-scale web UIs and APIs. Built responsive React components, collaborated with QA teams, and improved product performance with clean, modular code.",
    },
    {
      year: "Apr 2024 – Now",
      title: "Founder @ Tic Tech Toe (Freelancing)",
      icon: "💡",
      desc: "Crafted business sites, modern UIs & client-facing tools.",
      details:
        "Worked directly with small businesses to design & build digital experiences. Delivered fully responsive web apps using React, Firebase, and AI enhancements.",
    },
    {
      year: "2024",
      title: "Geekster Bootcamp",
      icon: "🧠",
      desc: "Solved 400+ DSA problems, built projects in React/Java/SQL.",
      details:
        "Completed intensive full-stack bootcamp. Built several solo & group projects, focused on frontend dev with strong fundamentals in Java, SQL, and system design.",
    },
  ];
  

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="mt-16 relative overflow-x-auto md:max-h-[200px]">
      <div className="flex md:flex-col gap-10 min-w-[600px] md:min-w-full relative px-2 snap-x snap-mandatory scroll-smooth scrollbar-thin">
        {/* Vertical line (for desktop) */}
        {/* <div className="hidden md:block absolute left-[0.75rem] top-4 bottom-0 w-[2px] bg-accent/10 z-0" /> */}

        {timelineItems.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleItem(index)}
            className="relative group cursor-pointer snap-center flex flex-col md:flex-row items-start gap-4 transition-all duration-300"
          >
            {/* Dot + Ping + Icon */}
            <div className="relative flex flex-col items-center justify-start">
              {/* <div className="w-4 h-4 bg-accent border-2 border-background rounded-full shadow-md z-10" /> */}
              {/* <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-accent opacity-30 animate-ping z-0" /> */}
              <span className="text-2xl mt-2">{item.icon}</span>
            </div>

            {/* Content Card */}
            <div className="bg-background/60 border border-accent/10 backdrop-blur-md px-5 py-4 rounded-xl shadow-sm w-[280px] md:w-full animate-fade-up">
            
              <p className="text-xs text-light/70">{item.year}</p>
              <h4 className="text-accent font-semibold text-base sm:text-lg">
                {item.title}
              </h4>
              <div className="flex w-full items-center justify-between relative">
              <p className="text-sm text-light/90 mt-1">{item.desc}</p>
                <BiChevronDown size={24} className={`absolute right-0 top-2 text-accent/50 hover:text-[#c9beeb]  ${expanded && "rotate-90"}`} />
              </div>

              {expanded === index && (
                <p className="text-sm text-light/60 mt-2 border-t border-accent/10 pt-2">
                  {item.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
