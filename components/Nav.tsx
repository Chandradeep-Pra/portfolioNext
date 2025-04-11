// components/Nav.tsx
"use client";

import Link from "next/link";

const links = [
  { href: "#hero", label: "Home", icon: "🏠" },
  { href: "#about", label: "About", icon: "👨‍💻" },
  { href: "#projects", label: "Projects", icon: "🧠" },
  { href: "#contact", label: "Contact", icon: "✉️" },
];

export default function Nav() {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-6 p-4 bg-background/50 backdrop-blur-xl rounded-3xl border border-accent/20 shadow-md">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex flex-col items-center text-accent hover:text-white transition-all"
        >
          <span className="text-xl">{link.icon}</span>
          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-light font-medium">
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
