import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary glow">
        Get in Touch
      </h2>
      <div className="glassmorphic p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Contact Information
            </h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Mail className="mr-2 text-primary" size={20} />
                <a
                  href="mailto:john.doe@example.com"
                  className="text-text hover:text-primary transition-colors"
                >
                  zoobe@live.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 text-primary" size={20} />
                <a
                  href="tel:+1234567890"
                  className="text-text hover:text-primary transition-colors"
                >
                  +91 8825021452
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 text-primary" size={20} />
                <span className="text-text">Srinagar, J&K, INDIA</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glassmorphic w-full px-3 py-2 text-text bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glassmorphic w-full px-3 py-2 text-text bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="glassmorphic w-full px-3 py-2 text-text bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="glassmorphic-button px-6 py-3 text-text hover:text-primary transition-colors rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
