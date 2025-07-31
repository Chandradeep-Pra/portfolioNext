"use client";
import { useState} from "react";
import { BiChevronDown } from "react-icons/bi";


const timelineItems = [
    
    {
      year: "Apr 2024 – Now",
      title: "Frontend Developer @ Tic Tech Toe",
      icon: "💡",
      desc: "Crafted business sites, modern UIs & client-facing tools.",
      details:
        "Worked directly with small businesses to design & build digital experiences. Delivered fully responsive web apps using React, Firebase, and AI enhancements.",
    },
    {
      year: "Aug 2022– Feb 2024",
      title: "Frontend Engineer @ Nissan Digital",
      icon: "💼",
      desc: "Built vendor portals, worked with React, Node, Selenium & Git.",
      details:
        "Worked on large-scale web UIs and APIs. Built responsive React components, collaborated with QA teams, and improved product performance with clean, modular code.",
    },
    {
      year: "2022",
      title: "Graduated B.Tech (CSE)",
      icon: "🎓",
      desc: "From SIEM, MAKAUT University.",
      details:
        "Completed my degree in Computer Science and Engineering. Built a strong foundation in programming, OOP, DBMS, and problem-solving.",
    },
    {
      year: "2021",
      title: "Geekster Bootcamp",
      icon: "🧠",
      desc: "Solved 400+ DSA problems, built projects in React/Java/SQL and was a FASTEST LEARNER",
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
            className="relative flex flex-col items-start gap-4 transition-all duration-300 cursor-pointer group snap-center md:flex-row"
          >
            {/* Dot + Ping + Icon */}
            <div className="relative flex flex-col items-center justify-start">
              {/* <div className="z-10 w-4 h-4 border-2 rounded-full shadow-md bg-accent border-background" /> */}
              {/* <div className="absolute top-0 left-0 z-0 w-4 h-4 rounded-full bg-accent opacity-30 animate-ping" /> */}
              <span className="mt-2 text-2xl">{item.icon}</span>
            </div>

            {/* Content Card */}
            <div className="bg-background/60 border border-accent/10 backdrop-blur-md px-5 py-4 rounded-xl shadow-sm w-[280px] md:w-full animate-fade-up">
            
              <p className="text-xs text-light/70">{item.year}</p>
              <h4 className="text-base font-semibold text-accent sm:text-lg">
                {item.title} <BiChevronDown size={24} className={`absolute right-0 top-2 text-accent/50 hover:text-[#c9beeb]  ${expanded && "rotate-180"}`} />
              </h4>
              <div className="relative flex items-center justify-between w-full">
              <p className="mt-1 text-sm text-light/90">{item.desc}</p>
                
              </div>

              {expanded === index && (
                <p className="pt-2 mt-2 text-sm border-t text-light/60 border-accent/10">
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
