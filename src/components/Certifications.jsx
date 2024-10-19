import React from 'react';
import { Award } from 'lucide-react';

const CertificationCard = ({ title, issuer, date }) => (
  <div className="glassmorphic p-6 hover-scale">
    <div className="flex items-center mb-4">
      <div className="glassmorphic p-2 rounded-full mr-4">
        <Award size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
    </div>
    <p className="text-text">{issuer}</p>
    <p className="text-accent text-sm">{date}</p>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Cisco Certified Network Professional (CCNP)",
      issuer: "Cisco",
      date: "2022"
    },
    {
      title: "CompTIA Network+",
      issuer: "CompTIA",
      date: "2020"
    },
    {
      title: "AWS Certified Advanced Networking - Specialty",
      issuer: "Amazon Web Services",
      date: "2021"
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: "2023"
    }
  ];

  return (
    <section id="certifications" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary glow">Certifications & Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;