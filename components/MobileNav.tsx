// components/MobileNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Home", icon: "🏠" },
  { href: "#about", label: "About", icon: "👨‍💻" },
  { href: "#projects", label: "Projects", icon: "🧠" },
  { href: "#contact", label: "Contact", icon: "✉️" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden fixed bottom-6 bg-transparent right-4 z-50 flex flex-col items-end gap-4">
      {/* Expanded Menu */}
      {open && (
        <div className="flex flex-col gap-3 p-3 bg-background border border-accent/20 backdrop-blur-md rounded-3xl shadow-lg animate-slide-up-fade">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-accent hover:bg-accent/10 transition"
              onClick={() => setOpen(false)}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-accent text-white text-2xl shadow-lg flex items-center justify-center transition-transform active:scale-95"
      >
        {open ? "✖️" : "☰"}
      </button>
    </div>
  );
}
