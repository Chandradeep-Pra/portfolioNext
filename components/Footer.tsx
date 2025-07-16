"use client";

import { BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiHeart } from "react-icons/bi";

export default function Footer() {
  const socialLinks = [
    {
      icon: BiLogoLinkedin,
      href: "https://linkedin.com/in/chandradeep-prasad",
      label: "LinkedIn"
    },
    {
      icon: BiLogoGithub,
      href: "https://github.com/chandradeep",
      label: "GitHub"
    },
    {
      icon: BiLogoTwitter,
      href: "https://twitter.com/chandradeep",
      label: "Twitter"
    }
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
    <footer className="relative z-10 bg-background/80 border-t border-accent/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Chandradeep Prasad</h3>
            <p className="text-light text-sm leading-relaxed">
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
                    className="p-2 bg-background/50 border border-accent/10 rounded-lg text-light hover:text-accent hover:border-accent/30 transition-all duration-300"
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
                  className="text-light hover:text-accent transition-colors duration-300 text-sm"
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
                <span className="text-accent font-medium">Email:</span><br />
                chandradeep.prasad@example.com
              </p>
              <p className="text-light">
                <span className="text-accent font-medium">Location:</span><br />
                India
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-green-400 text-xs font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-light text-sm">
            <span>Made with</span>
            <BiHeart className="text-red-400" size={16} />
            <span>by Chandradeep Prasad</span>
          </div>
          
          <div className="text-light/60 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}