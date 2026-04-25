"use client";

import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiMap,
  BiPhone,
} from "react-icons/bi";

const contactInfo = [
  {
    icon: BiEnvelope,
    label: "Email",
    value: "chandradeepp611@gmail.com",
    href: "mailto:chandradeepp611@gmail.com",
  },
  {
    icon: BiPhone,
    label: "Phone",
    value: "+91 96359-01369",
    href: "tel:+919635901369",
  },
  {
    icon: BiMap,
    label: "Location",
    value: "Bangalore, India",
    href: "#hero",
  },
];

const socialLinks = [
  {
    icon: BiLogoLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/chandradeepprasad",
  },
  {
    icon: BiLogoGithub,
    label: "GitHub",
    href: "https://github.com/chandradeep-pra",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl border-b border-line pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Available for meaningful engineering conversations and product work.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
              If you want to talk about software engineering, workflow systems,
              product development, or collaboration, I would be glad to connect.
            </p>
          </div>

          <div className="grid gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between gap-4 border border-line bg-surface p-5 transition-colors hover:border-accent"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-sm border border-line p-3 text-accent">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-text">{item.value}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted">Reach out</span>
                </a>
              );
            })}

            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-line bg-surface px-4 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
