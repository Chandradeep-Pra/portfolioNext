"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur sm:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        <Link
          href="#hero"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-text"
        >
          Chandradeep
        </Link>

        <button
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-line px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-line/70 py-3 text-sm text-muted transition-colors last:border-b-0 hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
