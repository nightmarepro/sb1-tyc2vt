import React from 'react';
import { Briefcase } from 'lucide-react';

const TimelineItem = ({ year, title, company, description }) => (
  <div className="mb-8 flex">
    <div className="flex flex-col items-center mr-4">
      <div>
        <div className="glassmorphic flex items-center justify-center w-10 h-10 rounded-full">
          <Briefcase className="text-primary" size={20} />
        </div>
      </div>
      <div className="w-px h-full bg-primary"></div>
    </div>
    <div className="glassmorphic p-6 rounded-lg flex-1">
      <time className="mb-1 text-sm font-normal leading-none text-secondary">{year}</time>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-base font-normal text-text">{company}</p>
      <p className="mt-2 text-sm text-accent">{description}</p>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      year: "2020 - Present",
      title: "Senior Network Engineer",
      company: "TechCorp Solutions",
      description: "Lead complex network design projects and oversee cybersecurity implementations for enterprise clients."
    },
    {
      year: "2018 - 2020",
      title: "IT Specialist",
      company: "DataSafe Systems",
      description: "Managed IT infrastructure and led the successful installation of 400+ IP cameras for Army/Defence in Kupwara."
    },
    {
      year: "2015 - 2018",
      title: "Network Administrator",
      company: "ConnectAll Networks",
      description: "Maintained and optimized network performance for a diverse portfolio of small to medium-sized businesses."
    },
    {
      year: "2012 - 2015",
      title: "IT Support Technician",
      company: "QuickFix IT Services",
      description: "Provided first-line support and troubleshooting for hardware and software issues across various platforms."
    }
  ];

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary glow">My Experience</h2>
      <div className="max-w-2xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;