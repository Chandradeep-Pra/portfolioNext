"use client";

import { BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiHeart } from "react-icons/bi";

export default function Footer() {
  const socialLinks = [
    {
      icon: BiLogoLinkedin,
      href: "https://linkedin.com/in/chandradeepprasad",
      label: "LinkedIn"
    },
    {
      icon: BiLogoGithub,
      href: "https://github.com/chandradeep-pra",
      label: "GitHub"
    },
    // {
    //   icon: BiLogoTwitter,
    //   href: "https://twitter.com/chandradeep",
    //   label: "Twitter"
    // }
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative z-10 border-t bg-background/80 border-accent/10 backdrop-blur-sm">
      <div className="px-6 py-12 mx-auto max-w-7xl md:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Chandradeep Prasad</h3>
            <p className="text-sm leading-relaxed text-light">
              Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences. 
              Always learning and exploring new technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-all duration-300 border rounded-lg bg-background/50 border-accent/10 text-light hover:text-accent hover:border-accent/30"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm transition-colors duration-300 text-light hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-light">
                <span className="font-medium text-accent">Email:</span><br />
                chandradeep.prasad@example.com
              </p>
              <p className="text-light">
                <span className="font-medium text-accent">Location:</span><br />
                India
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <span className="text-xs font-medium text-green-400">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-accent/10 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-light">
            <span>Made with</span>
            <BiHeart className="text-red-400" size={16} />
            <span>by Chandradeep Prasad</span>
          </div>
          
          <div className="text-sm text-light/60">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}