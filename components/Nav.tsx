// components/Nav.tsx
"use client";

import Link from "next/link";

const links = [
  { href: "#hero", label: "Home", icon: "🏠" },
  { href: "#about", label: "About", icon: "👨‍💻" },
  { href: "#skills", label: "Skills", icon: "⚡" },
  { href: "#experience", label: "Experience", icon: "💼" },
  { href: "#projects", label: "Projects", icon: "🧠" },
  { href: "#contact", label: "Contact", icon: "✉️" },
];

export default function Nav() {
  
  return (
    <nav className="fixed z-50 flex-col hidden gap-6 p-4 -translate-y-1/2 border shadow-md -left-4 top-1/2 sm:flex bg-background/20 backdrop-blur-xl rounded-3xl border-accent/20">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex flex-col items-center transition-all group text-accent hover:text-white"
        >
          <span className="text-xl">{link.icon}</span>
          <span className="text-xs font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-light">
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
