"use client";

import { useState } from "react";
import { BiEnvelope, BiPhone, BiMap, BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiSend } from "react-icons/bi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: BiEnvelope,
      label: "Email",
      value: "chandradeep.prasad@example.com",
      href: "mailto:chandradeep.prasad@example.com"
    },
    {
      icon: BiPhone,
      label: "Phone",
      value: "+91 96359-01369",
      href: "tel:+9196359-01369"
    },
    {
      icon: BiMap,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: BiLogoLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/chandradeepprasad",
      color: "hover:text-blue-400"
    },
    {
      icon: BiLogoGithub,
      label: "GitHub",
      href: "https://github.com/chandradeep-pra",
      color: "hover:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="relative z-10 px-6 py-24 mx-auto md:px-20 max-w-7xl text-text">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-16 text-center drop-shadow-[0_0_4px_var(--color-accent)]">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-accent">Let's Work Together</h3>
            <p className="mb-8 leading-relaxed text-light">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 transition-all duration-300 border bg-background/50 border-accent/10 rounded-xl backdrop-blur-sm hover:bg-accent/5 hover:border-accent/20 group"
                >
                  <div className="p-3 transition-all duration-300 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-white">
                    <IconComponent size={24} className="text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-light/60">{info.label}</div>
                    <div className="transition-colors duration-300 text-light group-hover:text-accent">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-accent">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-background/50 border border-accent/10 rounded-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 text-light ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability Status */}
          <div className="p-6 border bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="font-semibold text-accent">Available for Work - Send a message</span>
            </div>
            <p className="text-sm text-light">
              Currently open to new opportunities and freelance projects. 
              Let's discuss how we can work together!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="p-8 border bg-background/50 border-accent/10 rounded-2xl backdrop-blur-sm">
          <h3 className="mb-6 text-xl font-bold text-accent">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-light">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-all duration-300 border rounded-lg bg-background/60 border-accent/20 text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-light">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-all duration-300 border rounded-lg bg-background/60 border-accent/20 text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-light">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 transition-all duration-300 border rounded-lg bg-background/60 border-accent/20 text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-light">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 transition-all duration-300 border rounded-lg resize-none bg-background/60 border-accent/20 text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <BiSend size={20} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 text-sm text-center text-green-400 border rounded-lg bg-green-500/10 border-green-500/20">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </div> */}
      </div>
    </section>
  );
}