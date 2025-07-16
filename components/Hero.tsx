"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background flex flex-col justify-center items-center px-6 md:px-20 py-32 text-text">
      {/* 🌌 Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(127,90,240,0.07)] via-transparent to-[rgba(20,184,166,0.08)] blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[-6rem] left-[-6rem] w-[320px] h-[320px] bg-accent blur-[150px] opacity-25 rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[380px] h-[380px] bg-accent blur-[180px] opacity-10 rounded-full animate-pulse z-0" />
      <div className="absolute top-10 right-6 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-30 animate-ping-slow z-0 animate-[spin_40s_linear_infinite]" />

      {/* 👨‍💻 Hero Content */}
      <div className="relative z-10 text-center max-w-4xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-accent drop-shadow-[0_0_6px_var(--color-accent)]">
          Hi, I’m Chandradeep 👋
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-light leading-relaxed font-medium">
          A Frontend Developer with 1.5+ years of experience building
          responsive, high-performance UIs using React, TypeScript &
          TailwindCSS.
        </p>

        {/* 📦 Divider Grouped Box */}
        <div className="bg-background/60 border border-accent/10 p-4 rounded-3xl space-y-3 backdrop-blur-sm sm:px-6">
          <p className="text-sm text-primary text-start leading-relaxed">
            I enjoy crafting fast, accessible, and delightful interfaces — and
            I’ve explored tools like Next.js, Firebase, Web3, and even
            AI-powered UI experiences.
          </p>
          <p className="text-sm text-light opacity-80 font-medium text-start">
            🔍 <strong>Actively looking</strong> for Frontend roles. Let’s build
            something amazing together.
          </p>
        </div>

        {/* 📂 CTAs */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="#contact"
            className="bg-accent text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.04] hover:shadow-accent/30 transition-all duration-300"
          >
            📧 Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-accent text-accent px-7 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300"
          >
            🔍 Projects
          </a>
        </div>
      </div>

      {/* 🔖 Signature */}
      <div className="absolute bottom-4 text-xs text-light opacity-40 z-10 text-center">
        Crafted with Tailwind V4 • Focused on clean code & real results
      </div>

      <div className="fixed z-50 right-4 top-4 sm:right-6 sm:top-6 flex items-center gap-2 bg-background/70 border border-green-500 text-green-400 px-4 py-2 rounded-full shadow-lg backdrop-blur-md animate-fade-in">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm font-semibold">Available for Hire</span>
      </div>
    </section>
  );
}
