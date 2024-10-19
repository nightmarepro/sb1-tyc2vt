import React from 'react';
import { Server, Wifi, Shield, Code, Database, Monitor } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="glassmorphic p-6 hover-scale">
    <div className="flex items-center mb-4">
      <div className="glassmorphic p-2 rounded-full mr-4">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
          <span className="text-text">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Network Design",
      icon: Wifi,
      skills: ["LAN/WAN Architecture", "Software-Defined Networking (SDN)", "Network Virtualization", "Cloud Networking", "5G Networks"]
    },
    {
      title: "Network Protocols",
      icon: Server,
      skills: ["TCP/IP", "OSPF", "BGP", "MPLS", "VoIP"]
    },
    {
      title: "Network Security",
      icon: Shield,
      skills: ["Firewalls", "VPNs", "Intrusion Detection Systems", "Network Access Control", "Security Information and Event Management (SIEM)"]
    },
    {
      title: "Network Management",
      icon: Monitor,
      skills: ["Network Monitoring Tools", "Performance Optimization", "Troubleshooting", "Capacity Planning", "Network Documentation"]
    },
    {
      title: "Automation & Scripting",
      icon: Code,
      skills: ["Python", "Ansible", "Bash Scripting", "Network Automation Frameworks", "API Integration"]
    },
    {
      title: "Emerging Technologies",
      icon: Database,
      skills: ["Intent-Based Networking", "Network Function Virtualization (NFV)", "Internet of Things (IoT) Networking", "Edge Computing", "AI in Networking"]
    }
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary glow">Core Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;