import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
  avatarUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    email?: string;
  };
  onNavigateToProjects?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "Mostafa Nasser",
  title = "Full Stack Web Developer",
  tagline = "Building modern web applications with Laravel and React. Passionate about creating efficient, scalable solutions.",
  avatarUrl = "/profile.png",
  socialLinks = {
    github: "https://github.com/mostafanasser",
    linkedin: "https://www.linkedin.com/in/mostafakms/",
    facebook: "https://www.facebook.com/mostafakms1",
    twitter: "https://twitter.com",
    email: "mailto:mostafa.nasser.dev@gmail.com",
  },
  onNavigateToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">{tagline}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full max-w-md" id="cta-buttons-row">
                <Button
                  size="lg"
                  onClick={onNavigateToProjects}
                  className="font-medium flex-1"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  asChild
                  className="font-medium flex-1"
                >
                  <a href="https://drive.google.com/file/d/1iaNrdYtFnxthZXuy8dvaBBXdGFZfn6Mz/view?usp=sharing" download>
                    <Download className="inline-block mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>

              <Button
                size="lg"
                asChild
                className="mt-6 px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg flex items-center justify-center w-full max-w-md"
              >
                <a href="https://wa.me/201284036860" target="_blank" rel="noopener noreferrer">
                  <svg className="inline-block mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 32 32"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31C13.09 27.14 14.51 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.34 0-2.64-.26-3.85-.76l-.27-.11-4.27 1.37 1.4-4.13-.18-.28C7.26 18.01 7 16.53 7 15c0-5.06 4.13-9.18 9.18-9.18S25.36 9.94 25.36 15c0 5.06-4.13 9.18-9.18 9.18zm5.09-6.41c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.32 0 1.37.99 2.7 1.13 2.89.14.18 1.95 2.98 4.74 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                  Message Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}

              {socialLinks.email && (
                <a
                  href={socialLinks.email}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              )}

              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  <span className="sr-only">Facebook</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right side - Avatar/Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={avatarUrl}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <span className="text-sm text-muted-foreground mb-2">
            Scroll Down
          </span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
