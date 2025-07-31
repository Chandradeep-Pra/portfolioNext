"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-32 overflow-hidden bg-background md:px-20 text-text">
      {/* 🌌 Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(127,90,240,0.07)] via-transparent to-[rgba(20,184,166,0.08)] blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[-6rem] left-[-6rem] w-[320px] h-[320px] bg-accent blur-[150px] opacity-25 rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[380px] h-[380px] bg-accent blur-[180px] opacity-10 rounded-full animate-pulse z-0" />
      <div className="absolute top-10 right-6 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-30 animate-ping-slow z-0 animate-[spin_40s_linear_infinite]" />

      {/* 👨‍💻 Hero Content */}
      <div className="relative z-10 max-w-4xl space-y-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_6px_var(--color-accent)]">
          Hi, I’m Chandradeep <span>👋</span>
        </h1>

        <p className="text-base font-medium leading-relaxed sm:text-lg md:text-xl text-light">
          A Frontend Developer with 2+ years of experience building
          responsive, high-performance UIs using React, TypeScript &
          TailwindCSS.
        </p>

        {/* 📦 Divider Grouped Box */}
        <div className="p-4 space-y-3 border bg-background/60 border-accent/10 rounded-3xl backdrop-blur-sm sm:px-6">
          <p className="text-sm leading-relaxed text-primary text-start">
            I enjoy crafting fast, accessible, and delightful interfaces — and
            I’ve explored tools like Next.js, Firebase, Web3, and even
            AI-powered UI experiences.
          </p>
          <p className="text-sm font-medium text-light opacity-80 text-start">
            🔍 <strong>Actively looking</strong> for Frontend roles. Let’s build
            something amazing together.
          </p>
        </div>

        {/* 📂 CTAs */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="mailto:chandradeepp611@gmail.com"
            className="bg-accent text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.04] hover:shadow-accent/30 transition-all duration-300"
          >
            📧 Get In Touch
          </a>
          <a
            href="#projects"
            className="py-3 font-semibold transition-all duration-300 border-2 rounded-full border-accent text-accent px-7 hover:bg-accent hover:text-white"
          >
            🔍 Projects
          </a>
        </div>
      </div>

      {/* 🔖 Signature */}
      {/* <div className="absolute z-10 text-xs text-center bottom-4 text-light opacity-40">
        Crafted with Tailwind V4 • Focused on clean code & real results
      </div> */}

      <div className="fixed z-50 flex items-center gap-2 px-4 py-2 text-green-400 border border-green-500 rounded-full shadow-lg cursor-pointer right-4 top-4 sm:right-6 sm:top-6 bg-background/70 backdrop-blur-md animate-fade-in">
        <span className="relative flex w-3 h-3 ">
          <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
        </span>
       <a href="https://linkedin.com/in/chandradeepprasad" target="_blank" className="text-sm font-semibold">Available for Hire</a>
      </div>
    </section>
  );
}
