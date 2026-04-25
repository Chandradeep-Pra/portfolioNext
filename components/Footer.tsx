"use client";

export default function Footer() {
  return (
    <footer className="px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="text-text">Chandradeep Prasad</p>
        <div className="flex flex-wrap gap-5">
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#experience" className="hover:text-accent">
            Experience
          </a>
          <a href="#projects" className="hover:text-accent">
            Projects
          </a>
          <a href="mailto:chandradeepp611@gmail.com" className="hover:text-accent">
            Email
          </a>
        </div>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
