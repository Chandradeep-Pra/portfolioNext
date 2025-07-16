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
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX"
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
      href: "https://linkedin.com/in/chandradeep-prasad",
      color: "hover:text-blue-400"
    },
    {
      icon: BiLogoGithub,
      label: "GitHub",
      href: "https://github.com/chandradeep",
      color: "hover:text-gray-300"
    },
    {
      icon: BiLogoTwitter,
      label: "Twitter",
      href: "https://twitter.com/chandradeep",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-20 max-w-7xl mx-auto text-text">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-16 text-center drop-shadow-[0_0_4px_var(--color-accent)]">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Let's Work Together</h3>
            <p className="text-light leading-relaxed mb-8">
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
                  className="flex items-center gap-4 p-4 bg-background/50 border border-accent/10 rounded-xl backdrop-blur-sm hover:bg-accent/5 hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <IconComponent size={24} className="text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-light/60 font-medium">{info.label}</div>
                    <div className="text-light group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Follow Me</h4>
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
          <div className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="font-semibold text-accent">Available for Work</span>
            </div>
            <p className="text-light text-sm">
              Currently open to new opportunities and freelance projects. 
              Let's discuss how we can work together!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-background/50 border border-accent/10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-accent mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/60 border border-accent/20 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/60 border border-accent/20 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-light mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/60 border border-accent/20 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background/60 border border-accent/20 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <BiSend size={20} />
                  Send Message
                </>
              )}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}