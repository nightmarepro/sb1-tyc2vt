import React from 'react';
import {
  User,
  Briefcase,
  Award,
  Code,
  FolderOpen,
  Mail,
  FileText,
} from 'lucide-react';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-text">
      <div className="network-bg"></div>
      <header className="glassmorphic shadow-lg mb-8 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-6">
            {[
              { href: "#intro", icon: User, text: "About" },
              { href: "#skills", icon: Code, text: "Skills" },
              { href: "#projects", icon: FolderOpen, text: "Projects" },
              { href: "#certifications", icon: Award, text: "Certifications" },
              { href: "#contact", icon: Mail, text: "Contact" },
            ].map(({ href, icon: Icon, text }) => (
              <li key={href}>
                <a
                  href={href}
                  className="glassmorphic-button text-text hover:text-primary transition-colors px-3 py-2 md:px-4 md:py-2 inline-flex items-center text-sm md:text-base"
                >
                  <Icon className="inline mr-1" size={18} /> {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Introduction />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="glassmorphic shadow-inner mt-12">
        <div className="container mx-auto px-6 py-3 text-center text-text">
          © 2024 John Doe. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;