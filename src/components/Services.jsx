import React from 'react';
import { Network, Shield, Server, Cpu, Wifi, Database } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="glassmorphic p-6 flex flex-col items-center text-center">
    <div className="glassmorphic p-4 rounded-full mb-4">
      <Icon size={32} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
    <p className="text-text">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Network Design",
      description: "Custom network solutions tailored to your business needs, ensuring optimal performance and scalability."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security measures to protect your digital assets from evolving cyber threats."
    },
    {
      icon: Server,
      title: "IT Support",
      description: "Round-the-clock technical support to keep your systems running smoothly and efficiently."
    },
    {
      icon: Cpu,
      title: "Hardware Solutions",
      description: "Expert advice and implementation of hardware solutions to meet your technological requirements."
    },
    {
      icon: Wifi,
      title: "Wireless Networking",
      description: "Design and installation of robust wireless networks for seamless connectivity across your organization."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Efficient data storage, backup, and recovery solutions to safeguard your critical information."
    }
  ];

  return (
    <section id="services" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary glow">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;