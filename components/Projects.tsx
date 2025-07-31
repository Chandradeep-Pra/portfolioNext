"use client";

import Image from "next/image";
import { useState } from "react";
import { BiChevronDown,  BiLinkExternal, BiLogoGithub } from "react-icons/bi";

const projects = [
  {
    id: 1,
    title: "Shiptrack",
    category: "Full Stack",
    description: "A web based app to manage orders, customer, inventory and automated whatsapp message",
    longDescription: "Built a Fullstack SaaS app for a business to effeciently manage their customers and order lifecycle. User can add orders manually or get it from zoho. Notify automatically on WhatsApp for order status and send payment reminder. Reward system for customer who are paying on time. ",
    tech: ["NextJS","Typescript" ,"Firebase", "WhatsApp API Integration", "ZOHO estimate integration", "Custom and alive toast", "Optimistic UI", "Zustand"],
    image: "/projects/Shiptrack.png",
    github: "https://github.com/Tic-Tech-Toe/oms",
    live: "https://oms-delta.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Aashya ( Catalog + CMS )",
    category: "Fullstack",
    description: "A catalog with elegant UI + CMS - to update contents of catalog",
    longDescription: "Develpoed a fullstack app. Catalog - a very good looking website for indian dresses for a business. I used modern style ( like rounded corners and poppy yet pleasing colors ) , banner for each category and very smooth interaction. CMS ( the real magic ) - This CMS helps catalog to grow with business. User can add category and products in it. A smart banner maker ( this will never look bad ) - User can upload image and text and that's it - A smart algorithm can decide banner gradient, text color and can remove background from the image to make sure banner never looks bad. Live preview - User can manage order of the categories.",
    tech: ["NextJS", "TypeScript", "MongoDB", "Cloudinary", "Tailwind CSS"],
    image: "/projects/Aashya.png",
    github: "https://github.com/Chandradeep-Pra/cataloger-content-management",
    live: "https://github.com/Chandradeep-Pra/cataloger-aashya",
    featured: true
  },
  {
    id: 3,
    title: "Immersive Weather App",
    category: "Frontend",
    description: "If you wanna check what's the day looks like, Either look from window or open this app",
    longDescription: "A very live weather application with scenes to predict exactly what the day looks out , scene for light rain, heavy rain, thunder, sky color, cloud type, wind speed, snowfall, (day, night, evening, morning) and all this decided by a smart scene maker",
    tech: ["React", "JavaScript", "OpenWeatherMap API", "CSS3", "Framer-motion"],
    image: "/projects/Weather.png",
    github: "https://github.com/Chandradeep-Pra/weather-app",
    live: "#",
    featured: false
  },
  {
    id: 4,
    title: "CryptoKat",
    category: "Frontend",
    description: "A marketplace to list, buy and sell NFts",
    longDescription: "A web app to Buy, Sell and List NFTs. Made a good looking UI with light and dark mode. User can connect their Metamask wallet and can trade NFTs",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Smart-contract","Metamask","Sol","Web3"],
    image: "/projects/Kat.png",
    github: "https://github.com/Chandradeep-Pra/nft-marketplace",
    live: "https://nft-marketplace-snowy-nine.vercel.app/",
    featured: false
  },
  {
    id: 5,
    title: "Tasktrack",
    category: "Full Stack",
    description: "GenAI project management lifecycle",
    longDescription: "Built a fullstack app to help project manager to automate tasks. It starts from meeting transcription then it generates a comprehensive PRD and sends PM to review. Once review is done, it breaks down task in sub-task by category i.e Frontend, Backend and Testing. Looks inside employee database and assign task to them and generates ticket on Zira and sends mail to employees about the task with acceptance criteria.",
    tech: ["NextJS", "Typescript", "GenAI-(Gemini)", "Zira API",],
    image: "/projects/Tasktrack.png",
    github: "https://github.com/Chandradeep-Pra/task-train",
    live: "https://task-train.vercel.app/",
    featured: true
  },
  {
    id: 6,
    title: "Interview Helper",
    category: "Full Stack",
    description: "An AI agent to help people prepare for interview.",
    longDescription: "It reads resume, job description, looks for question asked previously and current market trends and then generates a set of question and starts taking candidate's interview. Generates a comprehensive and detailed feedback. I am trying to allow a code editor to take live coding test",
    tech: ["Next.js", "GenAI", "TailwindCSS", "Pdf-parser"],
    image: "/projects/IH.png",
    github: "https://github.com/Chandradeep-Pra/interview-helper-UI",
    live: "https://interview-helper-ui.vercel.app/",
    featured: false
  }
];

const categories = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="relative z-10 px-6 py-24 mx-auto md:px-20 max-w-7xl text-text">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-16 text-center drop-shadow-[0_0_4px_var(--color-accent)]">
        Featured Projects
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 p-1 border rounded-full bg-background/50 border-accent/10 backdrop-blur-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-white shadow-lg"
                  : "text-light hover:text-accent hover:bg-accent/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-background/60 border border-accent/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(127,90,240,0.15)]"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-accent/90 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Links */}
              <div className="absolute flex gap-2 transition-opacity duration-300 opacity-0 top-4 right-4 group-hover:opacity-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors duration-300 rounded-full bg-background/80 text-accent hover:bg-accent hover:text-white backdrop-blur-sm"
                >
                  {<BiLogoGithub size={18} />}
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors duration-300 rounded-full bg-background/80 text-accent hover:bg-accent hover:text-white backdrop-blur-sm"
                >
                  <BiLinkExternal size={18} />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors duration-300 text-accent group-hover:text-primary">
                {project.title}
              </h3>
              
              <p className="mb-4 text-sm leading-relaxed text-light">
                {expandedProject === project.id ? project.longDescription : project.description}
              </p>

              {/* Expand Button */}
              <button
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                className="flex items-center gap-1 mb-4 text-sm font-medium transition-colors duration-300 text-accent hover:text-primary"
              >
                {expandedProject === project.id ? "Show Less" : "Read More"}
                <BiChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    expandedProject === project.id ? "rotate-180" : ""
                  }`} 
                />
              </button>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium border rounded-full bg-accent/10 text-accent border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <a
          href="https://github.com/chandradeep-pra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 font-semibold transition-all duration-300 border rounded-full bg-accent/10 border-accent text-accent hover:bg-accent hover:text-white hover:scale-105"
        >
          <BiLogoGithub size={20} />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}