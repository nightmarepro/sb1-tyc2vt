import React from 'react';
import { Network, Shield, Server } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, icon: Icon }) => (
  <div className="glassmorphic p-6 hover-scale">
    <div className="flex items-center mb-4">
      <div className="glassmorphic p-2 rounded-full mr-4">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
    </div>
    <p className="text-text mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="glassmorphic-button px-2 py-1 text-xs text-accent">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Network Redesign",
      description: "Led a comprehensive network redesign for a multinational corporation, improving performance by 40% and reducing downtime by 60%.",
      technologies: ["Cisco", "SD-WAN", "MPLS", "BGP"],
      icon: Network
    },
    {
      title: "Cybersecurity Infrastructure Upgrade",
      description: "Implemented a state-of-the-art cybersecurity system for a financial institution, enhancing threat detection and response capabilities.",
      technologies: ["Palo Alto Networks", "Splunk SIEM", "Zero Trust Architecture"],
      icon: Shield
    },
    {
      title: "Cloud Migration and Hybrid Network",
      description: "Designed and executed a seamless migration of on-premises infrastructure to a hybrid cloud environment for a healthcare provider.",
      technologies: ["AWS", "Azure", "Hybrid Cloud", "Direct Connect"],
      icon: Server
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary glow">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;